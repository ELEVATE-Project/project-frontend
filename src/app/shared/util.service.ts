import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { subTaskData, taskData } from "../core/constants/util.key";

@Injectable({
    providedIn: 'root',
  })

  export class UtilService{
    configHeader: any = new Subject();
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
  }



