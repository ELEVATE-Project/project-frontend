import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent  implements OnInit {
  @Input() projectName: string = "Project Name";
  @Input() projectStatus: string | undefined;
  @Input() taskCount: any = 1;

  onCourseBtnClicked(projectName: any) {
    console.log(projectName);
  }
  constructor() { }

  ngOnInit() {}


}
