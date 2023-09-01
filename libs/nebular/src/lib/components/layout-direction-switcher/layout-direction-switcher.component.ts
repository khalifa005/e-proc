/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NbLayoutDirection, NbLayoutDirectionService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from 'libs/core/src/lib/services/i18n.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'e-proc-layout-direction-switcher',
  templateUrl: './layout-direction-switcher.component.html',
  styleUrls: ['./layout-direction-switcher.component.scss'],
})
export class LayoutDirectionSwitcherComponent implements OnDestroy {

  protected destroy$ = new Subject<void>();

  directions = NbLayoutDirection;
  currentDirection: NbLayoutDirection = NbLayoutDirection.LTR;

  @Input() vertical: boolean = false;

  constructor(private directionService: NbLayoutDirectionService,
    private i18nService: I18nService,
    private router: Router,
    public translate: TranslateService
    ) {


    this.directionService.onDirectionChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe(newDirection => this.currentDirection = newDirection);


      if( this.translate.currentLang === "ar-SA"){
        this.directionService.setDirection(this.directions.RTL);
      }
    }

  toggleDirection(newDirection: any) {
    this.directionService.setDirection(newDirection);
    //keep this as it will change the lang
    if(newDirection == "rtl"){
      this.i18nService.language = 'ar-SA';

    }else{
      this.i18nService.language = 'en-US';
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
