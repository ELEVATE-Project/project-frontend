import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { createProjectForm, headerConfigKeys } from 'src/app/core/constants/';
import { Category, LearningResource, ProjectDetails, Task } from 'src/app/core/interface/json';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent  implements OnInit {
  headerConfigKeys = headerConfigKeys;
  @Input() pageTitle: string = ""; 
  @Input()configBackButton: any = {};
  @Output() syncFunc: EventEmitter<void> = new EventEmitter<void>();
  projectDetails: ProjectDetails = new ProjectDetails();
  formData: any;
  constructor(
    private navCtrl: NavController,
    private router: Router
    ) {}

  goBack() {
    this.navCtrl.back();
  }
  ngOnInit() {
   
  }

  edit(){
    let json = createProjectForm;
    // to do: project edit 
    this.router.navigateByUrl('/layout/create-project');
  }


  mapApiResponseToForm(apiResponse: any, formConfig: any[]): any {
    const mappedForm: any = {};

    // Iterate through the form configuration
    for (const fieldConfig of formConfig) {
      const field = fieldConfig.field;

      // Check if the field exists in the API response
      if (apiResponse[field]) {
        mappedForm[field] = apiResponse[field];
      } else {
        // Handle cases where the field doesn't exist in the API response
        mappedForm[field] = fieldConfig.value || '';
      }
    }

    return mappedForm;
  }

  onSync() {
    this.syncFunc.emit();
  }

}
