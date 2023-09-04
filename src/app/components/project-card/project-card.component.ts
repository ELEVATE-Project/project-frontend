import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { utilKeys } from 'src/app/core/constants/utils.keys';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent  implements OnInit {
  @Input() projectName: string = "Project Name";
  @Input() projectStatus = ''  ;
  @Input() taskCount: any = 1;

  utilKeys = utilKeys
  viewProject(projectName: any) {
    console.log(projectName);
  }
  constructor() { }

  ngOnInit() {
    this.projectName =  this.projectName.charAt(0).toUpperCase() + this.projectName.slice(1); // makes first letter capital
  }


}