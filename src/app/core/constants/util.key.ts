export const taskData = {
    _id: '',
    status: 'notStarted',
    name: "",
    endDate: "",
    assignee: "",
    type: "simple",
    attachments: [],
    startDate: "",
    isNew: true,
    isEdit: true,
    children: [],
    isDeleted: false,
    isDeletable: true
  };

 export const subTaskData = {
    _id: '',
    status: 'notStarted',
    name: "",
    endDate: "",
    assignee: "",
    type: "simple",
    startDate: "",
    isNew: true,
    isEdit: true,
    isDeleted: false,
    isDeletable: true
  };


  export const utilKeys = {
    PROJECT_TYPE : {
      PROJECT : 'PROJECT',
      TASKS : 'TASKS' ,
      SUB_TASKS : 'SUB-TASKS'
    },
    STATUS_KEYS : {
      "started" : 'PROJECT_STATUS.STARTED',
      "notStarted" : 'PROJECT_STATUS.NOT_STARTED',
      "completed" : 'PROJECT_STATUS.COMPLETED'
    } as Record<string, string>  
  }


