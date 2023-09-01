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
  @Input() projectStatus: string | undefined;
  @Input() taskCount: any = 1;
  @Input() id: any = "";
  @Input() type: string = "";

  utilKeys = utilKeys;
  
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
    
  }



}