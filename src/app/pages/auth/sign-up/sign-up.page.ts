import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';
import { urlConstants } from 'src/app/core/constants/';
import { HttpService, UserService, ToastService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader/loader.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
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
    public toast: ToastService,
    private http: HttpService,
    private userService: UserService,
    private loaderService: LoaderService,
  ) {
    this.menuCtrl.enable(false);
    this.formData = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
      cpassword: ['',[Validators.required]],
      otp: ['',[]],
    });
  }

  ngOnInit() {
    this.translateText();
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

  async register(){
    var form: any = this.formData;
    console.log(form)
    if (form.status=="VALID") {
    this.loaderService.showLoader();
    if(form.value.password != form.value.cpassword){
        this.toast.showToast("Passwords don't match", 'danger');
        return
     }
    form.value.isAMentor =  false;
    const config = {
      url: urlConstants.API_URLS.REGISTRATION_OTP,
      payload: form.value,
    };
    this.http.postBeforeAuth(config).subscribe((data: any) => {
        if (data !== null) {
          // when OTP generated succesfully
          this.toast.showToast(data.message, "success")
          this.isOTPGenerated = true;
          this.loaderService.hideLoader();
        }
      })
      this.loaderService.hideLoader();
    }else{
      // show pop to complete the required details
      this.toast.showToast('Please enter the required details', 'danger');
    }
  }

  async createUser(){
    // to create user after OTP is generated
    var form: any = this.formData;
    console.log(form)
    if (form.status=="VALID") {
      this.loaderService.showLoader();
      form.value.isAMentor =  false;
      const config = {
      url: urlConstants.API_URLS.CREATE_ACCOUNT,
      payload: form.value,
    };
       this.http.postBeforeAuth(config).subscribe(async (data: any) => {
        if (data !== null) {
          this.userService.setUserInLocal(data);
          this.menuCtrl.enable(true);
          this.toast.showToast(data.message, "success")
          this.router.navigate(['/layouts'], { replaceUrl: true });
          this.loaderService.hideLoader();
      }
      this.menuCtrl.enable(true);
      });
      this.loaderService.hideLoader();
    }else{
      // show pop to complete the required details
      this.toast.showToast('Please enter the required details', 'danger');
    }
  }

  ngOnDestroy(){
    this.formData.reset();
  }

  redirectToSignIn(){
    this.router.navigate(['/auth/login'], { replaceUrl: true });
  }


}
