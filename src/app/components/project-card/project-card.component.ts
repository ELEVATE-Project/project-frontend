import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent  implements OnInit {
  @Input() projectName: string = "Project Name";
  @Input() projectStatus: string | undefined;
  @Input() taskCount: any = 1;

  viewProject(projectName: any) {
    console.log(projectName);
  }
  constructor() { }

  ngOnInit() {}


}
