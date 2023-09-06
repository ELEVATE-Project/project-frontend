import { Component, OnInit } from '@angular/core';
import { headerConfigKeys, urlConstants } from 'src/app/core/constants';
import { HttpService } from 'src/app/core/services';
import { UtilService } from 'src/app/shared/util.service';

@Component({
  selector: 'app-project-reports',
  templateUrl: './project-reports.component.html',
  styleUrls: ['./project-reports.component.scss'],
})
export class ProjectReportsComponent  implements OnInit {

  constructor(
    private http: HttpService,
    private utilsService: UtilService
  ) { }
  selectedValue: any = 0;
  reportTypes = [
    { type: 'PROJECT_REPORT.QUARTERLY', val: 2 },
    { type: 'PROJECT_REPORT.MONTHLY', val: 1 },
    { type: 'PROJECT_REPORT.WEEKLY', val: 0 },
  ];
  chartData: any;
  pieChartHeader: any = '';
  title: string = 'Reports';
  started: any = 0;
  notStarted: any = 0;
  completed: any = 0;
  dataAvailable: boolean = false;
  emptyLbl: string = 'NO_DATA'
  async ngOnInit() {
   this.getReport();
   this.utilsService.setHeaders({
    [headerConfigKeys.SHOW_ICON]: true,
    [headerConfigKeys.SHOW_MENU]: true,
    [headerConfigKeys.SHOW_SEARCH]: false,
    [headerConfigKeys.SHOW_NOTIFICATION]: false,
    [headerConfigKeys.SHOW_PROFILE]: true,
    })
  }
  
  changeSelectedType(ev: any){
    this.selectedValue = ev.target.value;
    this.getReport();
  }

  async getReport(){
    await this.http.setHeader();
   const dynamicUrl = urlConstants.API_URLS.GET_REPORT(this.selectedValue);
   const config = {
     url: dynamicUrl,
   };
    this.http.get(config).subscribe((data: any)=>{
    this.dataAvailable = data.result.dataAvailable; 
    const projData  = data.result.data.projects;
    this.started = projData.started;
    this.notStarted = projData.overdue;
    this.completed = projData.submitted;

    this.chartData = [{ data: [this.started,this.notStarted, this.completed] }]
   });
  }

}
