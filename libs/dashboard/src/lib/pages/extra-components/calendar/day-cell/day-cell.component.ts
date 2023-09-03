import { Component, HostBinding, HostListener } from '@angular/core';
import { NbCalendarDayCellComponent } from '@nebular/theme';

@Component({
  selector: 'e-proc-day-cell',
  templateUrl: 'day-cell.component.html',
  styleUrls: ['day-cell.component.scss'],
})
export class DayCellComponent extends NbCalendarDayCellComponent<Date> {
  @HostBinding('class') classes = 'day-cell';

  @HostListener('click') override onClick() {
    // do work
  }
}
