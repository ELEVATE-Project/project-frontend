import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { localKeys } from 'src/app/core/constants';
import { LocalStorageService } from 'src/app/core/services';
import { TranslateConfigService } from 'src/app/translate-config.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent  implements OnInit {
  user: any;
  title: string = 'Profile';

  languages: any = [
    {
      id: 1,
      lbl: 'LANGUAGES.ENGLISH',
      value: 'en',
    },
    {
      id: 2,
      lbl : 'LANGUAGES.HINDI',
      value: 'hn',
    },];
  constructor(
    private localStorage: LocalStorageService,
    private translateService: TranslateConfigService
  ) { }

  async ngOnInit() {
    let data =  await this.localStorage.getLocalData(localKeys.USER_DETAILS)
    this.user = JSON.parse(data).user;
  }

  get initials(): string {
    if (this.user.name) {
      return this.user.name.substring(0,2)
    }
    return '';
  }

  handleChange(ev: any){
    console.log(ev.target.value);
    const lang = ev.target.value;
    if(lang == 'hn'){
      this.translateService.setLanguage('hn')
    }else if(lang == 'en'){
      this.translateService.setLanguage('en')
    }
   
  }

  
  
}
