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
  async ionViewWillEnter(){
    this.makeApiCall();
  }
  
  async makeApiCall() {
    let data =  await this.localStorage.getLocalData(localKeys.USER_DETAILS)
    const authToken = JSON.parse(data).access_token;
    this.name = JSON.parse(data).user.name;
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${authToken}`,
        'X-authenticated-user-token': authToken,
        'Content-Type': 'application/json'
      });
   
    const config = {
      url: urlConstants.API_URLS.GET_PROJECT,
      headers : headers
    };
    this.http.get(config).subscribe(
      ((data:any)=>{
        if(data){
         this.projects =  data.result.map((item: { title: any; status: string; tasks: string | any[]; }) => {
            return {
              name: item.title,
              status: item.status ,
              taskCount: item.tasks.length
            };
          });
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
