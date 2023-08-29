import { Component, OnInit } from '@angular/core';
import { createProjectForm, headerConfigKeys } from 'src/app/core/constants/';
import { UtilService } from 'src/app/shared/util.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.page.html',
  styleUrls: ['./create-project.page.scss'],
})
export class CreateProjectPage implements OnInit {
  formData = createProjectForm;
  public title: string = 'PROJECT_CREATION.HEADER'
  constructor(
    private utilsService : UtilService
  ) { }

  ngOnInit() {
    this.utilsService.setHeaders({
      [headerConfigKeys.SHOW_ICON]: true,
      [headerConfigKeys.SHOW_MENU]: true,
      [headerConfigKeys.SHOW_SEARCH]: false,
      [headerConfigKeys.SHOW_NOTIFICATION]: false,
      [headerConfigKeys.SHOW_PROFILE]: true,
      })
  }

}
