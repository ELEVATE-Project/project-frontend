import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { headerConfigKeys, urlConstants } from 'src/app/core/constants';
import { utilKeys } from 'src/app/core/constants/util.key';
import { HttpService, ToastService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader/loader.service';
import { UtilService } from 'src/app/shared/util.service';
import { StorageService } from 'src/app/storage.service';

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
  projectId: any;
 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpService,
    private utilsService : UtilService,
    private loaderService: LoaderService,
    private storage: StorageService,
    private toast: ToastService
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
      this.projectId = params.get('id');
      console.log('Received id:', this.projectId);

      const project = await this.storage.get(this.projectId);
      if(project){
        // project available in local
        this.project = project;
        this.tasksCompleted = project.tasks.filter((task: any) => task.status == 'completed').length;
        return;
      }
      this.loaderService.showLoader();
      const dynamicUrl = urlConstants.API_URLS.GET_PROJECT_DETAIL(this.projectId);
      const config = {
        url: dynamicUrl,
      };

      await this.http.setHeader();
      this.http.get(config).subscribe(async (data) => {
        if (data) {
          this.project = data.result;
          this.tasksCompleted = data.result.tasks.filter((task: any) => task.status === 'completed').length;
          await this.storage.set(this.projectId, this.project);
        }
        this.loaderService.hideLoader();
      });
      });

      
  }


  addTask(){
    const taskId = '';
    const projectId = this.projectId;

    // Create an object to hold the route parameters (router arguments)
    const navigationExtras: NavigationExtras = {
      queryParams: { taskId, projectId }
    };


    this.router.navigate(["/layout/create-task/"], navigationExtras);
  }

  async onSubmit(){
    // submit when all tasks are completed
    this.project.status = 'completed';
    await this.storage.set(this.projectId, this.project);
    this.toast.showToast('Project submitted successfully', 'success');
  }

  async syncFunction() {
    // sync logic here
    if( this.project.status == 'submitted'){
      // if project is already submitted
      this.toast.showToast('Project already submitted', 'success');
      return;
    }
    const dynamicUrl = urlConstants.API_URLS.POST_PROJECT(this.projectId, this.project.lastDownloadedAt);
    const config = {
      url: dynamicUrl,
      payload: this.project
    };
    await this.http.setHeader();

    this.http.post(config).subscribe((result: any)=> {
      this.toast.showToast(result.message, 'success');
    });
  }

  

}
