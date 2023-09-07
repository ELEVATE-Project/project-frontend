import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { subTaskData, taskData } from "../core/constants/util.key";

@Injectable({
    providedIn: 'root',
  })


  export class UtilService{
    configHeader: any = new Subject();
    public projectId: any = 0;
    public taskId: any = 0;
    constructor(){ }

    setHeaders(setHeaderVal: any){
       this.configHeader.next(setHeaderVal);
    } 
  
    getMetaData(type: string) {
      switch (type) {
        case "task":
          taskData._id = uuidv4();
          return taskData;
        case "subTask":
          subTaskData._id = uuidv4();
          return subTaskData;
        default:
          return {};
      }
    }

    setId(pid: any){
      this.projectId = pid;
      // this.taskId = tid;
    }

    getId(){
      // const projId = this.projectId
      // const taskId = this.taskId
      // return { projId, taskId };
      return this.projectId;
    }
  }



