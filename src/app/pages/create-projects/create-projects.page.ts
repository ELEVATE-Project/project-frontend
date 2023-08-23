import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { headerConfigKeys, urlConstants } from 'src/app/core/constants';
import { createProjectForm } from 'src/app/core/constants/createProjectForm';
import { HttpService, ToastService } from 'src/app/core/services';

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.page.html',
  styleUrls: ['./create-projects.page.scss'],
})
export class CreateProjectsPage implements OnInit {
  showOtherInput = false;
  formData;
  showOthers = false;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private toast: ToastService
    ) {
      this.formData = this.formBuilder.group({
        title: ['',[Validators.required]],
        description: ['',[Validators.required]],
        categories: ['', Validators.required],
        other: ['',[]],
        startDate: ['',[Validators.required]],
        endDate: ['',[Validators.required]],
      });;

      this.formData.get('categories')?.valueChanges.subscribe((selectedCategories: any) => {
        // Check if 'other' is selected
        let otherSelected = false;

      selectedCategories.forEach((cat: { value: string }) => {
        if (cat.value === 'others') {
          otherSelected = true;
        }
      });

      this.showOthers = otherSelected;
      });
  
  }
  datetime: any;
  date = new Date().toISOString();
  translations: any = {};
  proj_title: any = ""
  configHeader = [
    {[headerConfigKeys.SHOW_BACK]: true, "action":headerConfigKeys.BACK},
    {[headerConfigKeys.SHOW_MENU]: true, "action": headerConfigKeys.MENU},
    {[headerConfigKeys.SHOW_SEARCH]: false, "action": headerConfigKeys.SEARCH },
    {[headerConfigKeys.SHOW_NOTIFICATION]: false, "action": headerConfigKeys.NOTIFICATION},
    {[headerConfigKeys.SHOW_PROFILE]: false, "action": headerConfigKeys.PROFILE},
  ]
  
  catOptions = [
    {
      "_id": "5fcfa9a2457d6055e33843ef",
      "label": "Teachers",
      "value": "teachers",
      "labelTranslations": "{\"en\":\"Teachers\",\"hi\":\"शिक्षकों की\"}"
    },
    {
      "_id": "5fcfa9a2457d6055e33843f0",
      "label": "Students",
      "value": "students",
      "labelTranslations": "{\"en\":\"Students\"}"
    },
    {
      "_id": "5fcfa9a2457d6055e33843f1",
      "label": "Infrastructure",
      "value": "infrastructure",
      "labelTranslations": "{\"en\":\"Infrastructure\"}"
    },
    {
      "_id": "5fcfa9a2457d6055e33843f2",
      "label": "Community",
      "value": "community",
      "labelTranslations": "{\"en\":\"Community\"}"
    },
    {
      "_id": "5fcfa9a2457d6055e33843f3",
      "label": "Education Leader",
      "value": "educationLeader",
      "labelTranslations": "{\"en\":\"Education Leader\"}"
    },
    {
      "_id": "5fcfa9a2457d6055e33843f4",
      "label": "School Process",
      "value": "schoolProcess",
      "labelTranslations": "{\"en\":\"School Process\"}"
    },
    {
      "_id": "",
      "label": "Others",
      "value": "others",
      "labelTranslations": "{\"en\":\"Others\"}",
      "showTextInput": false 
    }
  ];

  ngOnInit() {
   
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


  async onSubmit(){

    const selectedEndDate = this.formData.get('endDate')?.value!;
    const selectedStartDate = this.formData.get('startDate')?.value!;
    if(selectedStartDate > selectedEndDate){
      this.toast.showToast('PROJECT_CREATION.DATE_ERROR', 'danger');
      return;
    }

    var selectedCategories: any = this.formData.get('categories')?.value
      // Check if 'other' is selected
    selectedCategories!.forEach((cat: any) => {
        if(cat.value == 'others'){
          cat['name']  = this.formData.get('other')?.value;
        }          
    })
    console.log(this.formData?.value);
    // makke api call
    if(this.formData.valid){
  
      const payload = {
        ...this.formData.value,
        isDeleted: false,
        hasAcceptedTAndC: true,
        status: 'notStarted',
        learningResources : []
      };
      const config = {
        url: urlConstants.API_URLS.CREATE_PROJECT,
        payload: payload
      };

      await this.http.setHeader();
  
      this.http.post(config).subscribe(async (userDetails : any)=>{
        if (userDetails !== null) {
          this.toast.showToast(userDetails.message, "success")
          console.log('data  ', userDetails)
      }
      });
    }
  }

  startDate(event: any){
    this.formData.patchValue({
      startDate: event.detail.value
    });
  }

  endDate(event: any){
    this.formData.patchValue({
      endDate: event.detail.value
    });
  }
}
