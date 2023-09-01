import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { headerConfigKeys, urlConstants } from 'src/app/core/constants';
import { utilKeys } from 'src/app/core/constants/util.key';
import { HttpService } from 'src/app/core/services';
import { UtilService } from 'src/app/shared/util.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.page.html',
  styleUrls: ['./project-details.page.scss'],
})
export class ProjectDetailsPage implements OnInit {

  title: any = 'PROJECT_DETAILS.TITLE';
  project: any;
  tasksCompleted: any = 0;
  configBackButton = {
    [headerConfigKeys.SHOW_EDIT]: true,
    [headerConfigKeys.SHOW_SYNC]: true,
  }
  type = utilKeys.PROJECT_TYPE.TASKS
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpService,
    private utilsService : UtilService
  ) { }

  ngOnInit() {
    this.utilsService.setHeaders({
      [headerConfigKeys.SHOW_ICON]: true,
      [headerConfigKeys.SHOW_MENU]: true,
      [headerConfigKeys.SHOW_SEARCH]: false,
      [headerConfigKeys.SHOW_NOTIFICATION]: false,
      [headerConfigKeys.SHOW_PROFILE]: true,
      })
    this.route.paramMap.subscribe(async (params: any) => {
      const id = params.get('id');
      console.log('Received id:', id);
      const dynamicUrl = urlConstants.API_URLS.GET_PROJECT_DETAIL(id);
      const config = {
      url: dynamicUrl,
      };

    await this.http.setHeader();
    this.http.get(config).subscribe((data) => {
      if (data) {
        console.log(data);
        this.project = data.result;
        this.tasksCompleted = data.result.tasks.filter((task: any) => task.status === 'completed').length;
      }
    });
    });
  }

  deleteTask(task: any){
    console.log(task);
  }

  addTask(){
    
  }

}
