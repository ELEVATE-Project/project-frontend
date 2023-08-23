import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { headerConfigKeys, urlConstants } from 'src/app/core/constants';
import { createProjectForm } from 'src/app/core/constants/createProjectForm';
import { HttpService } from 'src/app/core/services';

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.page.html',
  styleUrls: ['./create-projects.page.scss'],
})
export class CreateProjectsPage implements OnInit {
  showOtherInput = false;
  constructor(private formBuilder: FormBuilder,
    private http: HttpService) {
    this.formGroup = this.formBuilder.group({});
  }
  translations: any = {};
  proj_title: any = ""
  configHeader = [
    {[headerConfigKeys.SHOW_BACK]: true, "action":headerConfigKeys.BACK},
    {[headerConfigKeys.SHOW_MENU]: true, "action": headerConfigKeys.MENU},
    {[headerConfigKeys.SHOW_SEARCH]: false, "action": headerConfigKeys.SEARCH },
    {[headerConfigKeys.SHOW_NOTIFICATION]: false, "action": headerConfigKeys.NOTIFICATION},
    {[headerConfigKeys.SHOW_PROFILE]: false, "action": headerConfigKeys.PROFILE},
  ]
  
  formData: any = []; 

formGroup: FormGroup;
onCategoryChange(event: any){
  console.log(event);
  const selectedCategories = event.detail.value;
  const otherField = this.formData.find((field: { field: string; }) => field.field === 'categories');

  this.showOtherInput = selectedCategories.includes('others');

  if (!this.showOtherInput) {
    this.formGroup.controls[otherField.field].setValue('');
  }
}

initializeForm() {
  this.formData.forEach((field: { input: string; field: any; }) => {
    //const validators = field.input === 'select' ? Validators.required : null;
    this.formGroup.addControl(field.field, this.formBuilder.control('', Validators.required));
  });
  console.log(this.formData);
}

  ngOnInit() {
    this.formData = createProjectForm
    this.initializeForm();
  }

  handleAction(action: string) {
    switch (action) {
      case headerConfigKeys.SEARCH:
        // Handle search action
        console.log('Search action triggered');
        break;
      case headerConfigKeys.NOTIFICATION:
        // Handle notification action
        console.log('Notification action triggered');
        break;
      case headerConfigKeys.PROFILE:
        // Handle profile action
        console.log('Profile action triggered');
        break;
      case headerConfigKeys.MENU:
        // Handle side menu action
        console.log('Side menu action triggered');
        break;
      default:
        break;
    }
  }


  onSubmit(){
    console.log(this.formGroup?.value);
    // makke api call



    // const config = {
    //   url: urlConstants.API_URLS.REGISTRATION_OTP,
    //   payload: this.formGroup.value,
    // };

    // this.http.post(config);
  }
}
