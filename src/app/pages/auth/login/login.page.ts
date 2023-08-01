import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { urlConstants } from 'src/app/core/constants/urlConstants';
import { HttpService } from 'src/app/core/services';
import { LocalStorageService } from 'src/app/core/services/localStorage/localstorage.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  labels=["WELCOME"];
  formData: FormGroup;
  constructor(
    private router: Router,
    private translateService: TranslateService,
    private menuCtrl: MenuController,
    private fb:FormBuilder,
    private toast: ToastService,
    private ngZone: NgZone,
    private http: HttpService,
  ) {
    this.menuCtrl.enable(false);
    this.formData = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
    });
  }

  ngOnInit() {
    this.translateText();
  }

  resetForm(){
    this.formData.reset();
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
    var form: any = this.formData;
    if (form.status=="VALID") {
      const config = {
        url: urlConstants.API_URLS.ACCOUNT_LOGIN,
        payload: form.value,
      };
      this.http.post(config).subscribe((userDetails : any)=>{
        if (userDetails !== null) {
          this.toast.showToast(userDetails.message, "success")
          this.menuCtrl.enable(true);
          this.router.navigate(['/home'], { replaceUrl: true });
      }
      })
       this.menuCtrl.enable(true);
    }else{
       // show pop to complete teh required details
       this.toast.showToast('Please enter the required details', 'danger');
    }
    }  

  redirectToForget(){
    this.resetForm();
    this.router.navigate(['/auth/forget-password'], { replaceUrl: true });
  }

  redirectToSignUp(){
    this.resetForm();
    this.router.navigate(['/auth/sign-up'], { replaceUrl: true });
  }

}
