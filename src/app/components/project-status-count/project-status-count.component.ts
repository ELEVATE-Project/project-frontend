import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-status-count',
  templateUrl: './project-status-count.component.html',
  styleUrls: ['./project-status-count.component.scss'],
})
export class ProjectStatusCountComponent  implements OnInit {
  @Input() type: any = "";
  @Input() count: any = 0;;

  constructor() { }

  ngOnInit() {}

}
