import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  labels=["CREATE_ACCOUNT","TO_CONNECT_SOLVE","&_SHARE"];
  screen: any = 'signin';
  formData: FormGroup;
  isLoading: boolean = false;
  isOTPGenerated: boolean = false;
  constructor(
    private router: Router,
    private translateService: TranslateService,
    private menuCtrl: MenuController,
    private fb:FormBuilder,
    private authService: AuthService,
    private toast: ToastService,
    private ngZone: NgZone 
  ) {
    this.menuCtrl.enable(false);
    this.formData = this.fb.group({
      name: ['',[]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
      cpassword: ['',[]],
      otp: ['',[]],
    });
  }

  ngOnInit() {
    this.translateText();
  }

  resetForm(){
    this.formData.reset();
  }

  change(event: any){
    this.screen = event;
    this.resetForm();
  }

  async translateText() {
    this.translateService.setDefaultLang('en');
    this.translateService.get(this.labels).subscribe((translatedLabel:any) => {
      let labelKeys = Object.keys(translatedLabel);
      labelKeys.forEach((key)=>{
        let index = this.labels.findIndex(
          (label) => label === key
        )
        this.labels[index]=translatedLabel[key];
      })
    })
  }
  async login(){
    // this.router.navigate(['/auth/login']);
    var form: any = this.formData;
    console.log(form)
    if (form.status=="VALID") {
      this.authService.loginAccount(form.value)?.subscribe(userDetails=>{
        if (userDetails !== null) {
          this.router.navigate(['/home'], { replaceUrl: true });
      }
      })
       // this.menuCtrl.enable(true);
    }else{
       // show pop to complete teh required details
       this.toast.showToast('Please enter the required details', 'danger');
    }
    }  

  async register(){
    //this.router.navigate(['/auth/persona-selection'])
    var form: any = this.formData;
    console.log(form)
    if (form.status=="VALID") {
      var userDetails =  await this.authService.generateOTP(form.value)?.subscribe(data => {
        if (userDetails !== null) {
          // when OTP generated succesfully
          this.ngZone.run( () => {
            this.isOTPGenerated = true;
         });
         // this.menuCtrl.enable(true);
        }
      })
     
        
  
    }else{
      // show pop to complete teh required details
      this.toast.showToast('Please enter the required details', 'danger');
    }
  }

  async createUser(){
    // to crete user after OTP is generated
    var form: any = this.formData;
    console.log(form)
    if (form.status=="VALID") {
      (await this.authService.createAccount(form.value)).subscribe(userDetails => {
        if (userDetails !== null) {
          this.router.navigate(['/home'], { replaceUrl: true });
      }
      // this.menuCtrl.enable(true);
      });
      
    }else{
      // show pop to complete teh required details
      this.toast.showToast('Please enter the required details', 'danger');
    }
  }

}
