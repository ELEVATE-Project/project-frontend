import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headerConfigKeys, localKeys, urlConstants } from 'src/app/core/constants/';
import { utilKeys } from 'src/app/core/constants/util.key';
import { HttpService, LocalStorageService } from 'src/app/core/services';
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
    private storage: StorageService
    ) { }

  projects: any;
  name: any;
  started: any = 0;
  notStarted: any = 0;
  completed: any = 0;
  chartData: any;
  pieChartHeader = "Project Reports";
  showEmptyMessage = false;
  type = utilKeys.PROJECT_TYPE.PROJECT

  async getName(){
    let data =  await this.localStorage.getLocalData(localKeys.USER_DETAILS)
    this.name = JSON.parse(data).user.name;
  }
  
  async getProjectList() {
    this.loaderService.showLoader();   
    const config = {
      url: urlConstants.API_URLS.GET_PROJECT,
    };
    await this.http.setHeader();
    this.http.get(config).subscribe(
      (async (data:any)=>{
        if(data){
          this.loaderService.hideLoader();
          if(data.result == 0){
            this.showEmptyMessage = true;
            return;
          }
         this.projects =  data.result.map((item: any) => {
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
              taskCount: item.tasks.length,
              id: item._id
            };
          });
          await this.storage.init();
          await this.storage.set('proj', this.projects);
          await this.storage.get('proj');

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
}