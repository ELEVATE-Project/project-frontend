import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headerConfigKeys, localKeys, urlConstants } from 'src/app/core/constants/';
import { HttpService, LocalStorageService, ToastService } from 'src/app/core/services';
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
    private utilsService: UtilService,
    private toast: ToastService
    ) { }

  projects: any;
  discoveredProjects: any
  name: any;
  started: any = 0;
  notStarted: any = 0;
  completed: any = 0;
  chartData: any;
  pieChartHeader = "Project Reports";
  showEmptyMessage = false;
  selectedTab: string = 'createdByMe';
  apiCall = ['createdByMe', 'discoveredByMe'];

  async getName(){
    let data =  await this.localStorage.getLocalData(localKeys.USER_DETAILS)
    this.name = JSON.parse(data).user.name;
  }
  

  
  async getCreatedProjects(){
    const dynamicUrl = urlConstants.API_URLS.HOME_PROJECTS(this.apiCall[0]);
    const config = {
      url: dynamicUrl,
    };

    await this.http.setHeader();
    this.http.get(config).subscribe((data) => {
      if (data) {
        if(data.result == 0){
          this.toast.showToast('No Data found', 'success');
          return;
        }
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
  }

  async getDiscoveredProjects(){
    const dynamicUrl = urlConstants.API_URLS.HOME_PROJECTS(this.apiCall[1]);
    const config = {
      url: dynamicUrl,
    };

    await this.http.setHeader();
    this.http.get(config).subscribe((data) => {
      if (data) {
        if(data.result == 0){
          this.toast.showToast('No Data found', 'success');
          return;
        }
        this.discoveredProjects =  data.result.map((item: { title: any; status: string; tasks: string | any[]; }) => {
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
  }

  ngOnInit() {
    this.getCreatedProjects();
    this.getDiscoveredProjects();
    //this.getProjectList();
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

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  viewAll(){
    this.router.navigate(['/layout/project-listing'], { replaceUrl: true });
  }
}