import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headerConfigKeys, localKeys, urlConstants } from 'src/app/core/constants/';
import { utilKeys } from 'src/app/core/constants/util.key';
import { HttpService, LocalStorageService, ToastService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader/loader.service';
import { UtilService } from 'src/app/shared/util.service';
import { StorageService } from 'src/app/storage.service';


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
    private loaderService: LoaderService,
    private storage: StorageService,
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
  type = utilKeys.PROJECT_TYPE.PROJECT
  selectedTab: string = 'createdByMe';
  lblCreated = 'CREATED_BY_ME';
  lblDiscovered = 'DISCOVERED_BY_ME';
  emptyLbl = 'HOME.EMPTY_LBL'

  async getName(){
    let data =  await this.localStorage.getLocalData(localKeys.USER_DETAILS)
    this.name = JSON.parse(data).user.name;
  }
    
  async getProjects(){
    const dynamicUrl = urlConstants.API_URLS.PROJECTS(this.selectedTab, '', 1);
    const config = {
      url: dynamicUrl,
    };
    this.started = this.notStarted = this.completed = 0;
    await this.http.setHeader();
    this.http.get(config).subscribe(async (data:any)=>{
        if(data){
          this.loaderService.hideLoader();
          if(data.result == 0){
            this.showEmptyMessage = true;
            return;
          }
         this.projects =  data.result.map((item: any) => {
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
              taskCount: item.tasks.length,
              id: item._id
            };
          });
          await this.storage.init();
          await this.storage.set('proj', this.projects);
          this.chartData = [{ data: [this.started,this.notStarted, this.completed] }]
          return data;
        }      
      }) 
  }


  ngOnInit() {
    this.getProjects();
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

  selectTab(event: any) {
    this.selectedTab = event.target.value;
    this.getProjects();
  }

  viewAll(){
    this.router.navigate(['/layout/project-listing'], { replaceUrl: true });
  }
}