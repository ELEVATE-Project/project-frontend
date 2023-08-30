import { Component, OnInit } from '@angular/core';
import { headerConfigKeys } from 'src/app/core/constants';
import { menuLabelKeys } from 'src/app/core/constants/menu.keys';
import { UtilService } from 'src/app/shared/util.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {
  // default 
  configHeader: any = {
    [headerConfigKeys.SHOW_ICON]: true,
    [headerConfigKeys.SHOW_MENU]: true,
    [headerConfigKeys.SHOW_SEARCH]: true,
    [headerConfigKeys.SHOW_NOTIFICATION]: true,
    [headerConfigKeys.SHOW_PROFILE]: true,
    };
  constructor(
    private utlService: UtilService
  ) {
    this.utlService.setHeaders(this.configHeader);
    this.utlService.configHeader.subscribe((header: any)=>{
      this.configHeader = header;
    })
  }

  ngOnInit() {
  }


  handleAction(action: string) {
    switch (action) {
      case headerConfigKeys.SHOW_SEARCH:
        // Handle search action
        console.log('Search action triggered');
        break;
      case headerConfigKeys.SHOW_NOTIFICATION:
        // Handle notification action
        console.log('Notification action triggered');
        break;
      case headerConfigKeys.SHOW_PROFILE:
        // Handle profile action
        console.log('Profile action triggered');
        break;
      case headerConfigKeys.SHOW_MENU:
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
