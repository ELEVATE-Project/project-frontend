import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { Router } from '@angular/router';
import { urlConstants } from 'src/app/core/constants';
import { HttpService, ToastService } from 'src/app/core/services';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss'],
})
export class FormComponent  implements OnInit {

  public showOthers: boolean = false;   
  public projectForm: FormGroup = this.fb.group({});
  @Input()createProjectForm: any = [];  // form json to display
  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private toast: ToastService,
    // private router: Router
    ) { }
  
 ngOnInit() {
  this.createForm(this.createProjectForm);
  }

  // create the form by adding controls
  createForm(controls: any) {
    this.projectForm = this.fb.group({});
    for (const field of controls) {
      let formControl = null;

      if (field.input === 'select') {
        formControl = this.fb.control('', Validators.required);
        if (field.field === 'categories') {
          formControl.valueChanges.subscribe((value: any) => {
            let otherSelected = false;

            value.forEach((cat: any) => {
              if (cat.value === 'others') {
                cat.isSelected = true;
                otherSelected = true;
              }
            });
      
            this.showOthers = otherSelected; 
            if (this.showOthers) {
              this.projectForm.get('otherCategory')?.setValidators([Validators.required]);
              this.showOthers = true;
            } else {
              this.projectForm.get('otherCategory')?.clearValidators();
            }
            this.projectForm.get('otherCategory')?.updateValueAndValidity();
          });
        }
      } else {
        formControl = this.fb.control('', {
          validators: field.validation.required ? Validators.required : null,
          updateOn: 'blur',
        });
      }

      this.projectForm.addControl(field.field, formControl);
    }

    this.projectForm.addControl(
      'otherCategory',
      this.fb.control('', {
        validators: [],
      })
    );
  }


  // submit the form
  async onSubmit(){

    if(!this.projectForm.valid) return;
    const selectedEndDate = this.projectForm.get('endDate')?.value!;
    const selectedStartDate = this.projectForm.get('startDate')?.value!;
    // validation to check endDate > startDate
    if(selectedStartDate > selectedEndDate){
      this.toast.showToast('PROJECT_CREATION.DATE_ERROR', 'danger');
      return;
    }

    var selectedCategories: any = this.projectForm.get('categories')?.value
      // Check if 'other' is selected
    selectedCategories!.forEach((cat: any) => {
        if(cat.value == 'others'){
          cat['name']  = this.projectForm.get('otherCategory')?.value;
        }          
    })

    // makke api call  
      const payload = {
        ...this.projectForm.value,
        isDeleted: false,
        hasAcceptedTAndC: true,
        status: 'notStarted',
        learningResources : []
      };
      const config = {
        url: urlConstants.API_URLS.CREATE_PROJECT,
        payload: payload
      };

      await this.http.setHeader();
  
      this.http.post(config).subscribe(async (userDetails : any)=>{
        if (userDetails !== null) {
          this.toast.showToast(userDetails.message, "success")
          //this.router.navigate(['/auth/login'], { replaceUrl: true });
      }
      });
    
      
  }

  // set the dates into their respective controls
  setDate(event: any, ctrl: any){
    this.projectForm.get(ctrl.field)?.setValue(event.detail.value);
  }
  

  // reset the form on rest button press
  onReset(){
    this.projectForm.reset();
  }


}
