import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from 'src/app/shared/util.service';

@Component({
  selector: 'app-task-forms',
  templateUrl: './task-forms.component.html',
  styleUrls: ['./task-forms.component.scss'],
})
export class TaskFormsComponent  implements OnInit {

  projectForm!: FormGroup;
  showOthers: any;
  constructor(
    private fb: FormBuilder,
    private utilService: UtilService) { }


  ngOnInit() {
    this.projectForm = this.fb.group({
      status: [''],      
      name: [''],        
      endDate: [''],    
      assignee: [''],    
      startDate : [''],   
    });

    this.newTask = this.utilService.getMetaData('task');
    console.log(this.newTask)
  }

  onSubmit(){

  }

  startDate(ev: any){
    
  }

  endDate(ev: any){
    
  }

newTask: any

}
