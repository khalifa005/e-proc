/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Logger, LookupDto, AppDefaultValues } from '@e-proc/core';
import { ToastNotificationService } from '../../../services/toast-notification.service';

@Component({
  selector: 'e-proc-yes-no-dropdown',
  templateUrl: './yes-no-dropdown.component.html',
  styleUrls: ['./yes-no-dropdown.component.scss']
})
export class YesNoDropdownComponent implements OnInit {
  private log = new Logger(YesNoDropdownComponent.name);

  @Output() selectedItemChanged = new EventEmitter<any>();
  @Input()
  selectedItem!: boolean;
  @Input() lable: string = "";
  @Input() readonly = false;
  @Input() isRequired = false;
  @Input() disabled = false;
  @Input()
  formcontrol!: FormControl;

  dropDownAllOption = new LookupDto(AppDefaultValues.DropDownAllOption,
    AppDefaultValues.DropDownAllOptionAr,
     AppDefaultValues.DropDownAllOptionEn);

  constructor(
    private toastNotificationService:ToastNotificationService) {
  }

  ngOnInit() {
  }

  onItemChanged() {
    this.selectedItemChanged.emit(this.selectedItem);
  }

}
