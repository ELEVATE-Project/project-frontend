import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { localKeys, urlConstants } from 'src/app/core/constants/';
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
  chartData: any;
  pieChartHeader = "Project Reports";

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
            this.started+=1;
          }else{
            this.notStarted+=1;
          }
            return {
              name: item.title,
              status: item.status,
              taskCount: item.tasks.length
            };
          });
          this.chartData = [{ data: [this.started,this.notStarted] }]
          return data;
        }        
      })
    )     
  }
 
  ngOnInit() {
  }

  redirectToProjectCreation(){
    this.router.navigate(['/create-projects']);
  }

}
