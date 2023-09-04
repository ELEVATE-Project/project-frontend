import { Component, Input, OnInit } from '@angular/core';
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
    console.log(this.configBackButton);
  }

  edit(){
    let api = 
    {
        "message": "Successfully fetched project details",
        "status": 200,
        "result": {
            "_id": "64bfb0cf2bf17aea84b38676",
            "userRole": "",
            "status": "notStarted",
            "isDeleted": false,
            "categories": [
                {
                    "_id": "64b534622bf17aea84b38629",
                    "externalId": "educationLeader",
                    "name": "Education Leader"
                },
                {
                    "_id": "64b534ca2bf17aea84b3862b",
                    "externalId": "teachers",
                    "name": "Teachers"
                }
            ],
            "tasks": [
                {
                    "_id": "7f101236-090a-4168-ab9c-37466dcbc2ba",
                    "createdBy": "64b12ef31073b0dd429e19b4",
                    "updatedBy": "64b12ef31073b0dd429e19b4",
                    "isDeleted": false,
                    "isDeletable": false,
                    "taskSequence": [],
                    "children": [],
                    "visibleIf": [],
                    "hasSubTasks": false,
                    "learningResources": [
                        {
                            "name": "कोर्स का परिचय",
                            "link": "https://staging.sunbirded.org/resources/play/content/do_31244521189999411215398",
                            "app": "Diksha",
                            "id": "do_31244521189999411215398"
                        }
                    ],
                    "deleted": false,
                    "type": "content",
                    "projectTemplateId": "64b534d32bf17aea84b3862f",
                    "projectTemplateExternalId": "MIPMLC23-1688974067915",
                    "name": "1.  मापन - लंबाई , भार एवं धारिता की समझ कोर्स का सिंघावलोकन करें ।",
                    "externalId": "MIPMLC23-Task1-1688974067915",
                    "description": "",
                    "sequenceNumber": "1",
                    "updatedAt": "2023-07-25T11:23:59.066Z",
                    "createdAt": "2023-07-17T12:56:12.856Z",
                    "__v": 0,
                    "status": "notStarted",
                    "referenceId": "64b53a6c2bf17aea84b3863d",
                    "isImportedFromLibrary": true,
                    "syncedAt": "2023-07-25T11:23:59.067Z"
                },
                {
                    "_id": "d2865c58-6d47-4c86-b951-e687c3644792",
                    "createdBy": "64b12ef31073b0dd429e19b4",
                    "updatedBy": "64b12ef31073b0dd429e19b4",
                    "isDeleted": false,
                    "isDeletable": false,
                    "taskSequence": [],
                    "children": [],
                    "visibleIf": [],
                    "hasSubTasks": false,
                    "learningResources": [
                        {
                            "name": "कोर्स से संबंधित दिशानिर्देश",
                            "link": "https://staging.sunbirded.org/resources/play/content/do_31244521189999411215398",
                            "app": "Diksha",
                            "id": "do_31244521189999411215398"
                        }
                    ],
                    "deleted": false,
                    "type": "content",
                    "projectTemplateId": "64b534d32bf17aea84b3862f",
                    "projectTemplateExternalId": "MIPMLC23-1688974067915",
                    "name": "2. कक्षाओं में लंबाई मापन की गतिविधियों का आयोजन करें तथा बच्चों से समझ आधारित सम्बन्धित प्रश्न पूछें।",
                    "externalId": "MIPMLC23-Task2-1688974067915",
                    "description": "",
                    "sequenceNumber": "2",
                    "updatedAt": "2023-07-25T11:23:59.067Z",
                    "createdAt": "2023-07-17T12:56:12.865Z",
                    "__v": 0,
                    "status": "notStarted",
                    "referenceId": "64b53a6c2bf17aea84b38640",
                    "isImportedFromLibrary": true,
                    "syncedAt": "2023-07-25T11:23:59.067Z"
                },
                {
                    "_id": "b091a40d-1ff4-45a2-989c-fd3a5254ceb4",
                    "createdBy": "64b12ef31073b0dd429e19b4",
                    "updatedBy": "64b12ef31073b0dd429e19b4",
                    "isDeleted": false,
                    "isDeletable": false,
                    "taskSequence": [],
                    "children": [],
                    "visibleIf": [],
                    "hasSubTasks": false,
                    "learningResources": [],
                    "deleted": false,
                    "type": "simple",
                    "projectTemplateId": "64b534d32bf17aea84b3862f",
                    "projectTemplateExternalId": "MIPMLC23-1688974067915",
                    "name": "3. कक्षाओं में भार मापन की गतिविधियों का आयोजन करें तथा बच्चों से समझ आधारित सम्बन्धित प्रश्न पूछें।",
                    "externalId": "MIPMLC23-Task3-1688974067915",
                    "description": "",
                    "sequenceNumber": "3",
                    "updatedAt": "2023-07-25T11:23:59.067Z",
                    "createdAt": "2023-07-17T12:56:12.872Z",
                    "__v": 0,
                    "status": "notStarted",
                    "referenceId": "64b53a6c2bf17aea84b38643",
                    "isImportedFromLibrary": true,
                    "syncedAt": "2023-07-25T11:23:59.067Z"
                },
                {
                    "_id": "85099a17-5a99-48fa-b636-79dec572f3e9",
                    "createdBy": "64b12ef31073b0dd429e19b4",
                    "updatedBy": "64b12ef31073b0dd429e19b4",
                    "isDeleted": false,
                    "isDeletable": false,
                    "taskSequence": [],
                    "children": [],
                    "visibleIf": [],
                    "hasSubTasks": false,
                    "learningResources": [],
                    "deleted": false,
                    "type": "simple",
                    "projectTemplateId": "64b534d32bf17aea84b3862f",
                    "projectTemplateExternalId": "MIPMLC23-1688974067915",
                    "name": "4. कक्षाओं में धारिता मापन की गतिविधियों का आयोजन करें तथा बच्चों से समझ आधारित सम्बन्धित प्रश्न पूछें।",
                    "externalId": "MIPMLC23-Task4-1688974067915",
                    "description": "",
                    "sequenceNumber": "4",
                    "updatedAt": "2023-07-25T11:23:59.067Z",
                    "createdAt": "2023-07-17T12:56:12.880Z",
                    "__v": 0,
                    "status": "notStarted",
                    "referenceId": "64b53a6c2bf17aea84b38646",
                    "isImportedFromLibrary": true,
                    "syncedAt": "2023-07-25T11:23:59.067Z"
                },
                {
                    "_id": "1307eaf0-db83-47f6-a7d7-ffc0f5766975",
                    "createdBy": "64b12ef31073b0dd429e19b4",
                    "updatedBy": "64b12ef31073b0dd429e19b4",
                    "isDeleted": false,
                    "isDeletable": false,
                    "taskSequence": [],
                    "children": [],
                    "visibleIf": [],
                    "hasSubTasks": false,
                    "learningResources": [],
                    "deleted": false,
                    "type": "simple",
                    "projectTemplateId": "64b534d32bf17aea84b3862f",
                    "projectTemplateExternalId": "MIPMLC23-1688974067915",
                    "name": "5. शिक्षक कक्षा में बच्चों के साथ कोर्स से जुड़ी कौनसी गतिविधि कर रहे हैं? संक्षेप में लिखें।",
                    "externalId": "MIPMLC23-Task5-1688974067915",
                    "description": "",
                    "sequenceNumber": "5",
                    "updatedAt": "2023-07-25T11:23:59.067Z",
                    "createdAt": "2023-07-17T12:56:12.886Z",
                    "__v": 0,
                    "status": "notStarted",
                    "referenceId": "64b53a6c2bf17aea84b38649",
                    "isImportedFromLibrary": true,
                    "syncedAt": "2023-07-25T11:23:59.067Z"
                },
                {
                    "_id": "5df7f2c3-dd35-44d5-9c7f-26ec1e63004c",
                    "createdBy": "64b12ef31073b0dd429e19b4",
                    "updatedBy": "64b12ef31073b0dd429e19b4",
                    "isDeleted": false,
                    "isDeletable": false,
                    "taskSequence": [],
                    "children": [],
                    "visibleIf": [],
                    "hasSubTasks": false,
                    "learningResources": [
                        {
                            "name": "साक्ष्य अपलोड करने हेतु सहायक विडियो",
                            "link": "https://staging.sunbirded.org/resources/play/content/do_31244521189999411215398",
                            "app": "Diksha",
                            "id": "do_31244521189999411215398"
                        }
                    ],
                    "deleted": false,
                    "type": "content",
                    "projectTemplateId": "64b534d32bf17aea84b3862f",
                    "projectTemplateExternalId": "MIPMLC23-1688974067915",
                    "name": "6. कक्षा गतिविधियों का साक्ष्य ( फोटो, वीडियो ) अपलोड करें।",
                    "externalId": "MIPMLC23-Task6-1688974067915",
                    "description": "",
                    "sequenceNumber": "6",
                    "updatedAt": "2023-07-25T11:23:59.067Z",
                    "createdAt": "2023-07-17T12:56:12.892Z",
                    "__v": 0,
                    "status": "notStarted",
                    "referenceId": "64b53a6c2bf17aea84b3864c",
                    "isImportedFromLibrary": true,
                    "syncedAt": "2023-07-25T11:23:59.067Z"
                }
            ],
            "learningResources": [],
            "hasAcceptedTAndC": true,
            "taskSequence": [
                "MIPMLC23-Task1-1688974067915",
                "MIPMLC23-Task2-1688974067915",
                "MIPMLC23-Task3-1688974067915",
                "MIPMLC23-Task4-1688974067915",
                "MIPMLC23-Task5-1688974067915",
                "MIPMLC23-Task6-1688974067915"
            ],
            "recommendedFor": [],
            "attachments": [],
            "deleted": false,
            "description": "शिक्षकों को कक्षा में मापन - लंबाई , भार एवं धारिता के शिक्षण कौशलों का संवर्धन करना । updated",
            "title": "SAMASTIPUR_MIP_मापन - लंबाई, भार एवं धारिता की समझ",
            "lastDownloadedAt": "2023-07-25T11:23:59.067Z",
            "_SYSTEM_ID": "64b0069953f17359a954ed51",
            "goal": "",
            "rationale": "",
            "primaryAudience": "",
            "duration": "2 Weeks",
            "successIndicators": "",
            "risks": "",
            "approaches": ""
        }
    }
    let json = createProjectForm
    this.formData = this.mapApiResponseToForm(api.result, json);
    this.router.navigateByUrl('/layout/create-project');
    console.log(this.formData)
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

}
