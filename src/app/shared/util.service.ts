import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })

  export class UtilService{
    configHeader: any = new Subject();
    constructor(){ }

    setHeaders(setHeaderVal: any){
      console.log(setHeaderVal);
       this.configHeader.next(setHeaderVal);
    } 
      
      
  }