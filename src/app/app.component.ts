import { Component, HostListener } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Router} from '@angular/router';
import { localKeys } from 'src/app/core/constants/';
import { LocalStorageService } from 'src/app/core/services/';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user:any;
  isMentor:any;
  showAlertBox = false;
  deferredPrompt: any;
  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e:any) {
    e.preventDefault();
    this.deferredPrompt = e;
  }

  constructor(
    private translate :TranslateService,
    private localStorage: LocalStorageService,
    public menuCtrl:MenuController,
    private router: Router,
  ) {
    this.initializeApp();
    this.router.navigate(["/"]);
  }

  addToHomeScreen() {
    if (this.deferredPrompt !== undefined && this.deferredPrompt !== null) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice
      .then((choiceResult:any) => {
        this.deferredPrompt = null;
      });
    }
}
  initializeApp() {
    this.localStorage.getLocalData(localKeys.SELECTED_LANGUAGE).then((data) => {
      if(!data){
        this.translate.setDefaultLang('en');
      }else{
        this.translate.setDefaultLang(data);
      }
    })
  }

  logout(){

  }
}

