import { Component, OnInit } from '@angular/core';
import { headerConfigKeys } from 'src/app/core/constants';
import { menuLabelKeys } from 'src/app/core/constants/menu.keys';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  configHeader = [
    {[headerConfigKeys.SHOW_MENU]: true, "action": headerConfigKeys.MENU},
    {[headerConfigKeys.SHOW_SEARCH]: true, "action": headerConfigKeys.SEARCH },
    {[headerConfigKeys.SHOW_NOTIFICATION]: false, "action": headerConfigKeys.NOTIFICATION},
    {[headerConfigKeys.SHOW_PROFILE]: true, "action": headerConfigKeys.PROFILE},
  ]

  handleAction(action: string) {
    switch (action) {
      case headerConfigKeys.SEARCH:
        // Handle search action
        console.log('Search action triggered');
        break;
      case headerConfigKeys.NOTIFICATION:
        // Handle notification action
        console.log('Notification action triggered');
        break;
      case headerConfigKeys.PROFILE:
        // Handle profile action
        console.log('Profile action triggered');
        break;
      case headerConfigKeys.MENU:
        // Handle side menu action
        console.log('Side menu action triggered');
        break;
      default:
        break;
    }
  }

  configMenu = menuLabelKeys;

  handleMenuClicks(action: string){
      console.log('routing', action);
  }
  
  logout(){

  }

}
