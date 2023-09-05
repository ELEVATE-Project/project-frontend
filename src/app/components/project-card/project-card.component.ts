import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { utilKeys } from 'src/app/core/constants/util.key';
import { UtilService } from 'src/app/shared/util.service';


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
    private utilService: UtilService
  ) { }

  viewProject(id: any) {
    console.log(id);  
    this.utilService.setId(id);
    this.router.navigateByUrl(`/layout/project-details/${id}`);
  }

  updateStatus(){
    console.log('updateStatus')
  }

  ngOnInit() {
    this.projectName =  this.projectName.charAt(0).toUpperCase() + this.projectName.slice(1); // makes first letter capital
  }

  popover(val : boolean){
    this.isOpen = val;
  }

  performAction(ev: any){
    this.popover(false);
    switch(ev){
      case 'EDIT':
        this.onEdit();
        break;
      case 'DELETE':
        break;
      case 'SHARE':
        break;
    }
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

}