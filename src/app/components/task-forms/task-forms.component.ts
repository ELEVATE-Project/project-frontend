import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { headerConfigKeys } from 'src/app/core/constants';
import { taskData, utilKeys } from 'src/app/core/constants/util.key';
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
    utilKeys= utilKeys;
    configBackButton = {
      [headerConfigKeys.SHOW_EDIT]: false,
      [headerConfigKeys.SHOW_SYNC]: false,
    }
    status: any = [
      { type: utilKeys.STATUS_KEYS['notStarted'], val: 'notStarted' },
      { type: utilKeys.STATUS_KEYS['inProgress'], val: 'started' },
      { type: utilKeys.STATUS_KEYS['completed'], val: 'completed' },
    ]
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
    if(!this.projectForm.valid){
        // show pop to complete the required details
      this.toast.showToast('Please enter the required details', 'danger');
      return;
    }
    const selectedEndDate = this.projectForm.get('endDate')?.value!;
    const selectedStartDate = this.projectForm.get('startDate')?.value!;
    // validation to check endDate > startDate
    if(selectedStartDate > selectedEndDate){
      this.toast.showToast('Start Date should be before End Date', 'danger');
      return;
    }
    const mappedData = { ...taskData }; // Create a copy of the taskData object

    let jsonData =   this.projectForm.value;
    // Map the JSON values to the corresponding fields

    mappedData.endDate = jsonData.endDate || '';
    mappedData.startDate = jsonData.startDate || '';
    mappedData.status = jsonData.status || '';
    mappedData.name = jsonData.title || '';

    if(this.taskId != ''){
      //  edit
      this.project.tasks.forEach((element: any, index: any) => {
        if(element._id == this.taskId){
          this.project.tasks[index] = mappedData;
        }
      });
    }else{
      this.project.tasks.push(mappedData); // add new task
      console.log(mappedData);
    }
    await this.storageService.set(this.projectId, this.project).then((data: any) => {
      if(this.taskId != ''){
        this.toast.showToast('Task Updated succesfully', 'success');
      }else{
        this.toast.showToast('Task Created succesfully', 'success');
      }

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