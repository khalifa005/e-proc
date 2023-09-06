import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { RoleForm } from './role.form';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Logger, LookupDto, convertToFormData, ApiResponse, StatusCode, NotitficationsDefaultValues } from '@e-proc/core';
import { ToastNotificationService } from '@e-proc/nebular';
import { NbWindowRef } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { RoleApiService } from '../api/roles.api.service';

@Component({
  selector: 'e-proc-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent implements OnInit , OnDestroy {

  private log = new Logger(RoleFormComponent.name);
  private subs: Subscription[] = [];

  @Output() valueChange = new EventEmitter<any>();
  @Input() passedModelDto : any;

  form: RoleForm;
  isUpdateMode: boolean = false;
  loadingSpinner = false;

  constructor(
    private router:Router,
    // protected ref: NbDialogRef<RoleFormComponent>,
    public windowRef: NbWindowRef<RoleFormComponent>,
    private apiService:RoleApiService,
    private toastNotificationService:ToastNotificationService,
    public fb: FormBuilder)
    {

    }

  modelDto: LookupDto = {
    Id:0,
    NameEn:'',
    Description:'',
    NameAr:'',
};

public cancel(statusCode:number) {
  this.windowRef.close(statusCode);
}

ngOnInit() {
  if(this.passedModelDto){
    this.modelDto = this.passedModelDto;
    this.isUpdateMode = true;
  }
  //GET from api service and ini the form
    this.form = new RoleForm(this.modelDto);
}

save(){
//save to db if form is valid
  if (this.form.valid) {
    this.log.info("reactive form submitted");
    this.log.info(this.form);
    this.handleForm(this.form);
  }
}

handleForm(form: RoleForm): void {
  const finalModelDto =  this.mapFormToDto(form);
  if(this.isUpdateMode){
    finalModelDto.Id = this.passedModelDto.Id;
  }

  const formData = convertToFormData(finalModelDto);
  if(this.isUpdateMode){
    this.updateModel(formData);
  }
  else{
    this.addNewModel(formData);
  }
}

private addNewModel(formData: FormData){
  this.apiService.add(formData).subscribe((response : ApiResponse<LookupDto>) => {
    this.log.info(response);
     if(response.StatusCode === StatusCode.Success)
     {
      this.toastNotificationService.showToast(NotitficationsDefaultValues.Success, 'lookup', 'saved-successfully');

      //emit event
      this.valueChange.emit(true);
      this.cancel(StatusCode.Success);
      // (valueChange)="formSubmitionChanged($event)"
      // formSubmitionChanged(newDirection: boolean) { // close modal}
     }
     else
     {
      this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, 'lookup', response.ErrorMessage);
     }

      },
      (erorr) => {
      this.log.error(erorr);
      this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, 'lookup', erorr);

    });
}

private updateModel(formData: FormData){
  this.apiService.update(formData).subscribe((response : ApiResponse<LookupDto>) => {
    this.log.info(response);
     if(response.StatusCode === StatusCode.Success)
     {
      this.toastNotificationService.showToast(NotitficationsDefaultValues.Success, 'lookup', 'updated-successfully');

      //emit event
      this.valueChange.emit(true);
      this.cancel(StatusCode.Success);
      // (valueChange)="formSubmitionChanged($event)"
      // formSubmitionChanged(newDirection: boolean) { // close modal}
     }
     else
     {
      this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, 'lookup-updated', response.ErrorMessage);
     }

      },
      (erorr) => {
      this.log.error(erorr);
      this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, 'lookup-updated', erorr);

    });
}

private mapFormToDto(form: RoleForm): LookupDto {
  return {
    ...form.value,
  } as LookupDto;
}

reset() {
  this.form.reset();
}

ngOnDestroy() {
  this.subs.forEach((s) => s.unsubscribe());
}

}
