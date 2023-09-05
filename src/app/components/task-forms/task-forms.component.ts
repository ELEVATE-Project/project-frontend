import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { headerConfigKeys } from 'src/app/core/constants';
import { taskData } from 'src/app/core/constants/util.key';
import { ToastService } from 'src/app/core/services';
import { UtilService } from 'src/app/shared/util.service';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-task-forms',
  templateUrl: './task-forms.component.html',
  styleUrls: ['./task-forms.component.scss'],
})
export class TaskFormsComponent  implements OnInit {

  projectForm!: FormGroup;
  showOthers: any;
  project: any;

  projectId: any;
  taskId: any;

  constructor(
    private fb: FormBuilder,
    private utilService: UtilService,
    private storageService: StorageService,
    private toast: ToastService,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute
    ) { }
    newTask: any
    public title: string = 'TASK_CREATION.HEADER'
    configBackButton = {
      [headerConfigKeys.SHOW_EDIT]: false,
      [headerConfigKeys.SHOW_SYNC]: false,
    }
  async ngOnInit() {
    // two scenarios :
    // edit: task id (local storage) + project id , new: project id -> children arr
    // project sync befrore log out
    // isnew = true, local : if any key is true then sync needed

    this.projectForm = this.fb.group({	
      status: ['',[Validators.required]],      	
      title: ['',[Validators.required]],     	
      startDate: ['',[Validators.required]],	
      endDate: ['',[Validators.required]],	
    });

    this.projectForm.reset();

    this.activatedRoute.queryParams.subscribe(async (queryParams: any) => {
      this.taskId = queryParams.taskId;
      this.projectId = queryParams.projectId;
  
      // Now you can use taskId and projectId in your component
      console.log('Task ID:', this.taskId);
      console.log('Project ID:', this.projectId);
    });
   
    let taskData = null;
    await this.storageService.get(this.projectId).then((data: any) => {
      this.project = data;
      data.tasks.forEach((element: any) => {
        if(element._id == this.taskId){
          taskData =  element;
        }
      });
    })

    this.setForm(taskData);
       
    this.newTask = this.utilService.getMetaData('task');
    console.log(this.newTask)
 
  }
  setForm(taskData: any) {
    this.projectForm.setValue({
      status: taskData.status,
      title: taskData.name,
      startDate: taskData.startDate,
      endDate: taskData.endDate,
    });
  }

  async onSubmit(){
    const mappedData = { ...taskData }; // Create a copy of the taskData object

    console.log(this.projectForm.value)
    let jsonData =   this.projectForm.value;
    // Map the JSON values to the corresponding fields

    mappedData.endDate = jsonData.endDate || '';
    mappedData.startDate = jsonData.startDate || '';
    mappedData.status = jsonData.status || '';
    mappedData.name = jsonData.title || '';


    console.log(mappedData);
    if(this.taskId != ''){
      //  edit
      this.project.tasks.forEach((element: any) => {
        if(element._id == this.taskId){
          element = mappedData;
          console.log("el", element)
        }
      });
    }else{
      this.project.tasks.push(mappedData); // add new task
      console.log(mappedData);
    }
    await this.storageService.set(this.projectId, this.project).then((data: any) => {
      this.toast.showToast('Task Created succesfully', 'success');
      this.navCtrl.back();
    })
  }

  startDate(event: any){ 
    this.projectForm.patchValue({
      startDate: event.detail.value
    });
  }

  endDate(event: any){
    this.projectForm.patchValue({
      endDate: event.detail.value
    });
  }



}