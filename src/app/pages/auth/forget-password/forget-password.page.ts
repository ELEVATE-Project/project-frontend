import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'src/app/core/services/';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  constructor( 
    private router: Router,
    private translateService: TranslateService,
    public menuCtrl: MenuController,
    private fb:FormBuilder,
    private toast: ToastService,
    ) {
      this.menuCtrl.enable(false);
     }

  ngOnInit() {
  }

  redirectToSignIn(){
    this.router.navigate(['/auth/login'], { replaceUrl: true });
  }

}
