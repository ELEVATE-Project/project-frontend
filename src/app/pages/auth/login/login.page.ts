import { Component, Injector, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';
import { localKeys } from 'src/app/core/constants/localStorage.keys';
import { urlConstants } from 'src/app/core/constants/urlConstants';
import { HttpService, UserService } from 'src/app/core/services';
import { LocalStorageService } from 'src/app/core/services/localStorage/localstorage.service';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { TranslateConfigService } from 'src/app/translate-config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  labels=["WELCOME"];
  formData: FormGroup;
  constructor(
    public router: Router,
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
    private translateConfigService: TranslateConfigService
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
    this.translateConfigService.getCurrentLang();
    this.translateConfigService.setLanguage('hn');
    // var form: any = this.formData;
    // if (form.status=="VALID") {
    //   const config = {
    //     url: urlConstants.API_URLS.ACCOUNT_LOGIN,
    //     payload: form.value,
    //   };
    //   this.http.postBeforeAuth(config).subscribe(async (userDetails : any)=>{
    //     if (userDetails !== null) {
    //       this.setUserInLocal(userDetails);
    //       this.toast.showToast(userDetails.message, "success")
    //       this.menuCtrl.enable(true);
    //       this.router.navigate(['/home'], { replaceUrl: true });
    //   }
    //   })
    //    this.menuCtrl.enable(true);
    // }else{
    //    // show pop to complete teh required details
    //    this.toast.showToast('Please enter the required details', 'danger');
    // }
    }  

  redirectToForget(){
    this.resetForm();
    this.router.navigate(['/auth/forget-password'], { replaceUrl: true });
  }

  redirectToSignUp(){
    this.resetForm();
    this.router.navigate(['/auth/sign-up'], { replaceUrl: true });
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

}
