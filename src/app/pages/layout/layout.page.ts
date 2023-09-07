import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headerConfigKeys } from 'src/app/core/constants';
import { menuLabelKeys } from 'src/app/core/constants/menu.keys';
import { LocalStorageService } from 'src/app/core/services';
import { AlertService } from 'src/app/core/services/alert/alert.service';
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
    private utlService: UtilService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private alert: AlertService
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
        this.router.navigateByUrl('/layout/search');
        break;
      case headerConfigKeys.SHOW_NOTIFICATION:
        // Handle notification action
        console.log('Notification action triggered');
        break;
      case headerConfigKeys.SHOW_PROFILE:
        // Handle profile action
        this.router.navigateByUrl('/layout/profile');
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

  async handleMenuClicks(action: string){
    switch(action){
      case 'SIDE_MENU_LAYOUT.LOGOUT' :
        const result = await this.alert.presentAlert('Do you want to log out?');
        if (result) {
          // User clicked "Yes"
          this.localStorageService.deleteAll();
          this.router.navigate(['/auth/login'], { replaceUrl: true });
        } else {
          // User clicked "No"
          console.log('no');
        }
        break;
      case 'SIDE_MENU_LAYOUT.HOME':
        this.router.navigate(['/layout/home'], { replaceUrl: true });
        break;
      default:
        break;
    }
  }
  

}
