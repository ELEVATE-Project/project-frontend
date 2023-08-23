import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headerConfigKeys, localKeys, menuLabelKeys, urlConstants } from 'src/app/core/constants/';
import { HttpService, LocalStorageService } from 'src/app/core/services';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private localStorage: LocalStorageService,
    private http: HttpService,
    private router: Router,
    ) { }

  projects: any;
  name: any;
  started: any = 0;
  notStarted: any = 0;
  completed: any = 0;
  chartData: any;
  pieChartHeader = "Project Reports";

  configHeader = [
    {[headerConfigKeys.SHOW_BACK]: false, "action":headerConfigKeys.BACK},
    {[headerConfigKeys.SHOW_MENU]: true, "action": headerConfigKeys.MENU},
    {[headerConfigKeys.SHOW_SEARCH]: true, "action": headerConfigKeys.SEARCH },
    {[headerConfigKeys.SHOW_NOTIFICATION]: false, "action": headerConfigKeys.NOTIFICATION},
    {[headerConfigKeys.SHOW_PROFILE]: true, "action": headerConfigKeys.PROFILE},
  ]

  configMenu = {
    headContainer: {
      content: [
        {
          type: 'p',
          text: menuLabelKeys.HEADER
        }
      ]
    },
    iconButtons: [
      {
        iconName: 'home',
        label: menuLabelKeys.HOME
      },
      {
        iconName: 'school',
        label: menuLabelKeys.SCHOOL
      },
      {
        iconName: 'person',
        label: menuLabelKeys.PERSON
      },
      {
        iconName: 'settings',
        label: menuLabelKeys.SETTINGS
      },
      {
        iconName: 'log-out',
        label: menuLabelKeys.LOGOUT
      }
    ]
  };

  handleMenuClicks(action: string){
    switch (action) {
      case menuLabelKeys.HOME:
        // Handle home action
        break;
      case menuLabelKeys.SCHOOL:
        // Handle projects action
        break;
      case menuLabelKeys.PERSON:
        // Handle profile action
        break;
      case  menuLabelKeys.SETTINGS:
        // Handle settings action
        break;
        case  menuLabelKeys.LOGOUT:
          // Handle log-out action
          break;
      default:
        break;
    }
  }

  handleAction(action: string) {
    switch (action) {
      case headerConfigKeys.SEARCH:
        // Handle search action
        break;
      case headerConfigKeys.NOTIFICATION:
        // Handle notification action     
        break;
      case headerConfigKeys.PROFILE:
        // Handle profile action
        break;
      case headerConfigKeys.MENU:
        // Handle side menu action
        break;
      default:
        break;
    }
  }

  async ionViewWillEnter(){
    this.getProjectList();
    this.getName();
  }

  async getName(){
    let data =  await this.localStorage.getLocalData(localKeys.USER_DETAILS)
    this.name = JSON.parse(data).user.name;
  }
  
  async getProjectList() {   
    const config = {
      url: urlConstants.API_URLS.GET_PROJECT,
    };
    await this.http.setHeader();
    this.http.get(config).subscribe(
      ((data:any)=>{
        if(data){
         this.projects =  data.result.map((item: { title: any; status: string; tasks: string | any[]; }) => {
          if(item.status == 'started') {
            item.status = "Started";
            this.started+=1;
          }else if(item.status == 'notStarted'){
            item.status = "Not Started";
            this.notStarted+=1;
          }else{  
            item.status = "Completed";
            this.completed+=1;
          }
            return {
              name: item.title,
              status: item.status,
              taskCount: item.tasks.length
            };
          });
          this.chartData = [{ data: [this.started,this.notStarted, this.completed] }]
          return data;
        }        
      })
    )     
  }
 
  ngOnInit() {
  }

  redirectToProjectCreation(){
    this.router.navigate(['/create-project']);
  }

}
