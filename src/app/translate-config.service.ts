import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { localKeys } from 'src/app/core/constants/';

@Injectable({
    providedIn: 'root'
  })
  export class TranslateConfigService {
  
    currentLang: any;
  
    constructor(
      private translate: TranslateService,
    ) {
      this.currentLang = localStorage.getItem('lang');
    }
  
    getDefaultLanguage(){
      if (this.currentLang) {
        this.translate.setDefaultLang(this.currentLang);
      } else {
        localStorage.setItem(localKeys.SELECTED_LANGUAGE, this.translate.getBrowserLang()!);
        this.currentLang = this.translate.getBrowserLang();
        this.translate.setDefaultLang(this.currentLang);
      }
      return this.currentLang;
    }
  
    setLanguage(setLang: string) {
      this.translate.use(setLang);
      localStorage.setItem(localKeys.SELECTED_LANGUAGE, setLang);
    }
  
    getCurrentLang() {
      return localStorage.getItem(localKeys.SELECTED_LANGUAGE);
    }
  
  } 