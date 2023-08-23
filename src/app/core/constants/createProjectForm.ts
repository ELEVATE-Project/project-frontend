


export const createProjectForm = 
 [
      {
        "field": "title",
        "label": "PROJECT_CREATION.PRJ_TITLE",    
        "value": "",
        "labelTranslations": "trans.PRJ_TITLE",
        "visible": true,
        "editable": true,
        "input": "text",
        "validation": {
          "required": true
        },
        "max": 50,
        "hint": "PROJECT_CREATION.PRJ_TITLE_HINT",
        "hintTranslations": "PROJECT_CREATION.PRJ_TITLE_HINT"
      },
      {
        "field": "description",
        "label": "PROJECT_CREATION.OBJECTIVE",
        "labelTranslations": "trans.OBJECTIVE",
        "value": "",
        "visible": true,
        "editable": true,
        "input": "textarea",
        "validation": {
          "required": true
        },
        "max": 120,
        "hint": "PROJECT_CREATION.OBJECTIVE_HINT",
        "hintTranslations": "PROJECT_CREATION.OBJECTIVE_HINT"
      },
      {
        "field": "categories",
        "label": "PROJECT_CREATION.ROLE",
        "labelTranslations": "trans.ROLE",
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
            "labelTranslations": "{\"en\":\"Others\"}",
            "showTextInput": false 
          }
        ],
        "validation": {
          "required": true
        },
        "hint": "PROJECT_CREATION.ROLE_HINT",
        "hintTranslations": "PROJECT_CREATION.ROLE_HINT"
      },
      {
        "label": "Others",
        "value": "others",
        "field":"otherinput",
        "labelTranslations": "{\"en\":\"Others\"}",
        "visible": true,  
        "input": "text" ,
        "editable": true,
        "validation": {
          "required": true
        },
        "max": 50,
        "hint": "Enter other category",
        "hintTranslations": "PROJECT_CREATION.PRJ_TITLE_HINT"
      },
      {
        "field": "start_date",
        "label": "Start Date",
        "visible": true,
        "input": "date",
        "validation": {
          "required": true
        }
      },
      {
        "field": "end_date",
        "label": "End Date",
        "visible": true,
        "input": "date",
        "validation": {
          "required": true
        }
      },
      
    ]
  