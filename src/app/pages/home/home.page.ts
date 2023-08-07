import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/localStorage/localstorage.service';
import { ProjectsInfoService } from 'src/app/core/services/projects/projects-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public pieChartOptions = {
    responsive: true,
  };

  chartData: any = [{ data: [10,20,15], label: "Stock price" }];
  chartLabels = ["c", "p", "s"];

  chartOptions = {
    responsive: true,
  }
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
    // this.projectsService.getProject().subscribe(data => {
    //   console.log(data);
    // });
  }

}
