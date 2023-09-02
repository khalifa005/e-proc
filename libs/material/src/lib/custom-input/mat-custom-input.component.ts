import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'e-proc-mat-custom-input',
  templateUrl: './mat-custom-input.component.html',
  styleUrls: ['./mat-custom-input.component.css'],
})
export class MatCustomInputComponent implements OnInit  , OnDestroy {

  @Output() selectedItemChange = new EventEmitter<any>();
  @Input() selectedItem: any;
  @Input() readonly = false;
  @Input() isRequired = false;
  @Input() disabled = false;
  @Input() lable = "";
  @Input() placeHolder = "";
  @Input() formcontrol: any;
  private subs: Subscription[] = [];


  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  ngOnInit() {

if(this.selectedItem){
  // this.log.info(this.selectedItem);
}

  }

  onItemChanged(value:any) {
  // this.log.info(value);

    this.selectedItemChange.emit(this.selectedItem);
  }

  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }


}
