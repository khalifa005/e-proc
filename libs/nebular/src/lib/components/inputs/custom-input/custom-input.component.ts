/* eslint-disable @typescript-eslint/no-inferrable-types */
import { first } from 'rxjs/operators';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Logger } from '@e-proc/core';
import { ToastNotificationService } from '../../../services/toast-notification.service';

@Component({
  selector: 'e-proc-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit  , OnDestroy{
  private log = new Logger(CustomInputComponent.name);

  @Output() selectedItemChange = new EventEmitter<any>();
  @Input() selectedItem: any;
  @Input() readonly = false;
  @Input() isRequired = false;
  @Input() disabled = false;
  @Input() lable: string = "";
  @Input() placeHolder: string = "";
  // @Input() regexPattern: RegExp;
  // @Input() messages = validationMessages;
  // errors: ValidationErrors

  @Input() formcontrol: FormControl | undefined;
  private subs: Subscription[] = [];


  constructor(
    private toastNotificationService:ToastNotificationService) {

  }

  ngOnInit() {

if(this.selectedItem){
  this.log.info(this.selectedItem);
}

  }

  onItemChanged(value:any) {
  this.log.info(value);

    this.selectedItemChange.emit(this.selectedItem);
  }

  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }


}
