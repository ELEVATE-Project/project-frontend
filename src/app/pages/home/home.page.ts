import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headerConfigKeys, localKeys, urlConstants } from 'src/app/core/constants/';
import { HttpService, LocalStorageService } from 'src/app/core/services';
import { UtilService } from 'src/app/shared/util.service';


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
    private utilsService: UtilService
    ) { }

  projects: any;
  name: any;
  started: any = 0;
  notStarted: any = 0;
  completed: any = 0;
  chartData: any;
  pieChartHeader = "Project Reports";
  showEmptyMessage = false;

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
          if(data.result == 0){
            this.showEmptyMessage = true;
            return;
          }
         this.projects =  data.result.map((item: { title: any; status: string; tasks: string | any[]; }) => {
          if(item.status == 'started') {
            this.started+=1;
          }else if(item.status == 'notStarted'){
            this.notStarted+=1;
          }else{  
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
    this.getProjectList();
    this.getName();
    this.utilsService.setHeaders({
      [headerConfigKeys.SHOW_ICON]: true,
      [headerConfigKeys.SHOW_MENU]: true,
      [headerConfigKeys.SHOW_SEARCH]: true,
      [headerConfigKeys.SHOW_NOTIFICATION]: false,
      [headerConfigKeys.SHOW_PROFILE]: true,
      })  
  }

  redirectToProjectCreation(){
    this.router.navigateByUrl('/layout/create-project');
  }

  navigateToReports(){
    console.log('reports');
    this.router.navigateByUrl('/layout/reports');
  }
}