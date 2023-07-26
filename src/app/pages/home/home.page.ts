import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/localStorage/localstorage.service';
import { ProjectsInfoService } from 'src/app/core/services/projects/projects-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  projects: any;
  ionViewWillEnter(){
    this.projects = [
      { name: 'Project 1', status: 'In Progress', taskCount: 5 },
      { name: 'Project 2', status: 'Completed', taskCount: 10 },
    ];
  }
  constructor(private projectsService: ProjectsInfoService,
    private localStorage: LocalStorageService,) { }

 
  ngOnInit() {
    this.projectsService.getProject().subscribe(data => {
      console.log(data);
    });
  }

}
