import { Component, Injector, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';
import { localKeys } from 'src/app/core/constants/localStorage.keys';
import { urlConstants } from 'src/app/core/constants/urlConstants';
import { HttpService, UserService } from 'src/app/core/services';
import { LocalStorageService } from 'src/app/core/services/localStorage/localstorage.service';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';

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
    private toast: ToastService,
    private ngZone: NgZone,
    private http: HttpService,
     private userService: UserService,
    private localStorage: LocalStorageService,
    private injector: Injector,
    private profileService: ProfileService,
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

  async register(){
    var form: any = this.formData;
    console.log(form)
    if (form.status=="VALID") {
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
        }
      })
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
      form.value.isAMentor =  false;
      const config = {
      url: urlConstants.API_URLS.CREATE_ACCOUNT,
      payload: form.value,
    };
       this.http.postBeforeAuth(config).subscribe(async (data: any) => {
        if (data !== null) {
          this.setUserInLocal(data);
          this.menuCtrl.enable(true);
          this.toast.showToast(data.message, "success")
          this.router.navigate(['/home'], { replaceUrl: true });
      }
      this.menuCtrl.enable(true);
      });
      
    }else{
      // show pop to complete the required details
      this.toast.showToast('Please enter the required details', 'danger');
    }
  }

    setUserInLocal(data:any) {
    const result = _.pick(data.result, ['refresh_token', 'access_token']);
    if (!result.access_token) { throw Error(); };
    this.userService.token = result;
    this.localStorage.setLocalData(localKeys.TOKEN, JSON.stringify(result)).then(()=>{
      this.profileService.getProfileDetailsAPI().subscribe((userData:any)=>{
        if (!userData) {
          this.localStorage.delete(localKeys.TOKEN);
          throw Error();
        }
        this.localStorage.setLocalData(localKeys.USER_DETAILS, JSON.stringify(userData)).then((data)=>{
          if(userData.preferredLanguage){
            this.localStorage.setLocalData(localKeys.SELECTED_LANGUAGE, JSON.stringify(userData.preferredLanguage));
            this.translateService.use(userData.preferredLanguage);
          }
        })
        this.userService.userEvent.next(userData);
        return userData;
      })
    })
  }

  redirectToSignIn(){
    this.resetForm();
    this.router.navigate(['/auth/login'], { replaceUrl: true });
  }


}
