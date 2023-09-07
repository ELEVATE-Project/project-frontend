import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { urlConstants } from 'src/app/core/constants/';
import { HttpService, UserService, ToastService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader/loader.service';



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
    private http: HttpService,
    private userService: UserService,
    private loaderService: LoaderService
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

  ngOnDestroy(){
    this.formData.reset();
  }

  async translateText() {
    // function to translate text
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
      this.loaderService.showLoader();
      const config = {
        url: urlConstants.API_URLS.ACCOUNT_LOGIN,
        payload: form.value,
      };
      this.http.postBeforeAuth(config).subscribe(async (userDetails : any)=>{
        if (userDetails !== null) {
          this.userService.setUserInLocal(userDetails);
          this.toast.showToast(userDetails.message, "success")
          this.menuCtrl.enable(true);
          this.router.navigate(['/layout'], { replaceUrl: true });
          this.loaderService.hideLoader();
      }
      })
      this.loaderService.hideLoader();
      this.menuCtrl.enable(true);
    }else{
       // show pop to complete the required details
       this.toast.showToast('Please enter the required details', 'danger');
    }
    }  

  redirectToForget(){
    this.router.navigate(['/auth/forget-password'], { replaceUrl: true });
  }

  redirectToSignUp(){
    this.router.navigate(['/auth/sign-up'], { replaceUrl: true });
  }

}
