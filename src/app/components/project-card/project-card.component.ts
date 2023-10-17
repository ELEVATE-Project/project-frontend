import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
import { utilKeys } from 'src/app/core/constants/util.key';
import { ToastService } from 'src/app/core/services';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { UtilService } from 'src/app/shared/util.service';
import { StorageService } from 'src/app/storage.service';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent  implements OnInit {
  @Input() projectName: string = "Project Name";
  @Input() projectStatus = ''  ;
  @Input() taskCount: any = 1;
  @Input() id: any = "";
  @Input() type: string = "";

  utilKeys = utilKeys;
  isOpen: boolean = false;  // used to display popover

  popoverbtn = [
    {icon : 'create' , lbl : 'EDIT'},
    {icon : 'trash' , lbl : 'DELETE'},
    {icon : 'share' , lbl : 'SHARE'},
  ]
  constructor(
    private router: Router,
    private popoverController: PopoverController,
    private utilService: UtilService,
    private storageService: StorageService,
    private toast: ToastService,
    private alert: AlertService,
    private navCtrl: NavController
  ) { }

  viewProject(id: any) {
    this.utilService.setId(id);
    this.router.navigateByUrl(`/layout/project-details/${id}`);
  }

  ngOnInit() {
    this.projectName =  this.projectName.charAt(0).toUpperCase() + this.projectName.slice(1); // makes first letter capital
  }

  popover(val : boolean){
    this.isOpen = val;
  }

  performAction(ev: any){
    switch(ev){
      case 'EDIT':
        this.onEdit();
        break;
      case 'DELETE':
        this.onDelete();
        break;
      case 'SHARE':
        break;
      default:
        this.popover(false);
    }
    this.popover(false);
  }

  onEdit(){
    const taskId = this.id;
    const projectId = this.utilService.getId();

    // Create an object to hold the route parameters (router arguments)
    const navigationExtras: NavigationExtras = {
      queryParams: { taskId, projectId }
    };


    this.router.navigate(["/layout/create-task/"], navigationExtras);
  }

  async onDelete(){
    const result = await this.alert.presentAlert('DELETE_ALERT')
    if(result){
    const taskId = this.id;
    const projectId = this.utilService.getId()
    await this.storageService.get(projectId).then(async (data) => {
      let project = data;
      data.tasks.forEach((element: any, index: any) => {
        if(element._id == taskId){
          data.tasks.splice(index,1);
        }
      });
      await this.storageService.set(projectId, project).then((data: any) => {
          this.toast.showToast('Task Deleted succesfully', 'danger');
      })

    })
  }
  }

}