export const createProjectForm = 
 [
      {
        "field": "title",
        "label": "PROJECT_CREATION.FORM.PRJ_TITLE",    
        "value": "",
        "labelTranslations": "",
        "visible": true,
        "editable": true,
        "input": "text",
        "validation": {
          "required": true
        },
        "max": 50,
        "hint": "PROJECT_CREATION.FORM.PRJ_TITLE_HINT",
        "hintTranslations": ""
      },
      {
        "field": "description",
        "label": "PROJECT_CREATION.FORM.OBJECTIVE",
        "labelTranslations": "",
        "value": "",
        "visible": true,
        "editable": true,
        "input": "textarea",
        "validation": {
          "required": true
        },
        "max": 120,
        "hint": "PROJECT_CREATION.FORM.OBJECTIVE_HINT",
        "hintTranslations": ""
      },
      {
        "field": "categories",
        "label": "PROJECT_CREATION.FORM.CATEGORY",
        "labelTranslations": "",
        "value": "",
        "visible": true,
        "editable": true,
        "input": "select",
        
        "options": [
          {
            "_id": "5fcfa9a2457d6055e33843ef",
            "label": "Teachers",
            "value": "teachers",
            "labelTranslations": "{\"en\":\"Teachers\",\"hi\":\"शिक्षकों की\"}",
            "selectedKey" : false,
          },
          {
            "_id": "5fcfa9a2457d6055e33843f0",
            "label": "Students",
            "value": "students",
            "labelTranslations": "{\"en\":\"Students\"}",
            "selectedKey" : false,
          },
          {
            "_id": "5fcfa9a2457d6055e33843f1",
            "label": "Infrastructure",
            "value": "infrastructure",
            "labelTranslations": "{\"en\":\"Infrastructure\"}",
            "selectedKey" : false,
          },
          {
            "_id": "5fcfa9a2457d6055e33843f2",
            "label": "Community",
            "value": "community",
            "labelTranslations": "{\"en\":\"Community\"}",
            "selectedKey" : false,
          },
          {
            "_id": "5fcfa9a2457d6055e33843f3",
            "label": "Education Leader",
            "value": "educationLeader",
            "labelTranslations": "{\"en\":\"Education Leader\"}",
            "selectedKey" : false,
          },
          {
            "_id": "5fcfa9a2457d6055e33843f4",
            "label": "School Process",
            "value": "schoolProcess",
            "labelTranslations": "{\"en\":\"School Process\"}",
            "selectedKey" : false,
          },
          {
            "_id": "",
            "label": "Others",
            "value": "others",
            "labelTranslations": "{\"en\":\"Others\"}",
            "showTextInput": false 
          }
        ],
        "validation": {
          "required": true
        },
        "hint": "PROJECT_CREATION.FORM.CATEGORY_HINT",
        "hintTranslations": ""
      },
      {
        "label": "PROJECT_CREATION.FORM.OTHER",
        "value": "others",
        "field":"otherCategory",
        "labelTranslations": "{\"en\":\"Others\"}",
        "visible": false,  
        "input": "other" ,
        "editable": true,
        "validation": {
          "required": true
        },
        "max": 50,
        "hint": "PROJECT_CREATION.FORM.OTHER_HINT",
        "hintTranslations": ""
      },
      {
        "field": "startDate",
        "label": "PROJECT_CREATION.FORM.STARTDATE",
        "visible": true,
        "input": "date",
        "value": "",
        "validation": {
          "required": true
        }
      },
      {
        "field": "endDate",
        "label": "PROJECT_CREATION.FORM.ENDDATE",
        "visible": true,
        "input": "date",
        "value" : "",
        "validation": {
          "required": true
        }
      },
      
    ]
  