import { Component, OnInit } from '@angular/core';
import { localKeys } from 'src/app/core/constants';
import { LocalStorageService } from 'src/app/core/services';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent  implements OnInit {
  user: any;
  title: string = 'Profile';
  constructor(
    private localStorage: LocalStorageService
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


}
