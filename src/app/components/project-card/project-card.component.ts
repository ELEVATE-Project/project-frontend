import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { utilKeys } from 'src/app/core/constants/util.key';


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
  isOpen: boolean = false;

  popoverbtn = [
    {icon : 'create' , lbl : 'EDIT'},
    {icon : 'trash' , lbl : 'DELETE'},
    {icon : 'share' , lbl : 'SHARE'},
  ]
  constructor(
    private router: Router,
    private popoverController: PopoverController
  ) { }

  viewProject(id: any) {
    console.log(id);  
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
    switch(ev){
      case 'EDIT':
        this.router.navigateByUrl('/layout/create-task');
        break;
      case 'DELETE':
        break;
      case 'SHARE':
        break;
    }
    this.popover(false);
  }

}