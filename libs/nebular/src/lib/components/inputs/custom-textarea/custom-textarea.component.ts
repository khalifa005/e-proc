/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Logger } from '@e-proc/core';
import { Subscription } from 'rxjs';
import { ToastNotificationService } from '../../../services/toast-notification.service';

@Component({
  selector: 'e-proc-custom-textarea',
  templateUrl: './custom-textarea.component.html',
  styleUrls: ['./custom-textarea.component.css']
})
export class CustomTextareaComponent implements OnInit  , OnDestroy{
  private log = new Logger(CustomTextareaComponent.name);

  @Output() selectedItemChanged: EventEmitter<number> = new EventEmitter();
  @Input()
  selectedItem!: number;
  @Input() readonly = false;
  @Input() isRequired = false;
  @Input() disabled = false;
  @Input() lable: string = "";
  @Input() placeHolder: string = "";

  @Input() formcontrol: FormControl | undefined;
  private subs: Subscription[] = [];


  constructor(
    private toastNotificationService:ToastNotificationService) {

  }

  ngOnInit() {
  }



  onItemChanged() {
    this.selectedItemChanged.emit(this.selectedItem);
  }

  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }


}
