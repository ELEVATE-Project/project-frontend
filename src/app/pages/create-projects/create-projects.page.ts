import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { headerConfigKeys } from 'src/app/core/constants';

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.page.html',
  styleUrls: ['./create-projects.page.scss'],
})
export class CreateProjectsPage implements OnInit {

  proj_title: any = ""
  configHeader = [
    {[headerConfigKeys.SHOW_BACK]: true, "action":headerConfigKeys.BACK},
    {[headerConfigKeys.SHOW_MENU]: true, "action": headerConfigKeys.MENU},
    {[headerConfigKeys.SHOW_SEARCH]: false, "action": headerConfigKeys.SEARCH },
    {[headerConfigKeys.SHOW_NOTIFICATION]: false, "action": headerConfigKeys.NOTIFICATION},
    {[headerConfigKeys.SHOW_PROFILE]: false, "action": headerConfigKeys.PROFILE},
  ]
  
  formData = [
    {
        "field": "title",
        "label": "Project Title (mandatory)",
        "value": "",
        "labelTranslations": "{\"en\":\"Project Title (mandatory)\",\"hi\":\"शीर्षक\"}",
        "visible": true,
        "editable": true,
        "input": "text",
        "validation": {
            "required": true
        },
        "max": 50,
        "hint": "Name your project",
        "hintTranslations": "{\"en\":\"Name your project\"}"
    },
    {
      "field": "title",
      "label": "Project dsfsdfs (mandatory)",
      "labelTranslations": "{\"en\":\"Project Title (mandatory)\",\"hi\":\"शीर्षक\"}",
      "value": "",
      "visible": true,
      "editable": true,
      "input": "text",
      "validation": {
          "required": true
      },
      "max": 50,
      "hint": "Name your project",
      "hintTranslations": "{\"en\":\"Name your project\"}"
  },
    {
        "field": "description",
        "label": "Description (mandatory)",
        "labelTranslations": "{\"en\":\"Description (mandatory)\"}",
        "value": "",
        "visible": true,
        "editable": true,
        "input": "textarea",
        "validation": {
            "required": true
        },
        "max": 120,
        "hint": "What is the objective of your Project?",
        "hintTranslations": "{\"en\":\"What is the objective of your Project?\"}"
    },
    {
        "field": "categories",
        "label": "Categories (mandatory)",
        "labelTranslations": "{\"en\":\"Categories (mandatory)\"}",
        "value": "",
        "visible": true,
        "editable": true,
        "input": "select",
        "options": [
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
                "labelTranslations": "{\"en\":\"Others\"}"
            }
        ],
        "validation": {
            "required": false
        },
        "hint": "What does your project aim to improve?",
        "hintTranslations": "{\"en\":\"What does your project aim to improve?\"}"
    }
]

formGroup: FormGroup;
constructor(private formBuilder: FormBuilder) {
  this.formGroup = this.formBuilder.group({});
  this.initializeForm();
}

initializeForm() {
  this.formData.forEach((field) => {
    const validators = field.input === 'select' ? Validators.required : null;
    this.formGroup.addControl(field.field, this.formBuilder.control('', validators));
  });
}

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

  onSubmit(){
    console.log(this.formGroup?.value);
  }
}
