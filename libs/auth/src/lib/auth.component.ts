import { Component, OnInit } from "@angular/core";
import { Logger } from "@e-proc/core";
import { NbLayoutDirection, NbLayoutDirectionService } from "@nebular/theme";
import { TranslateService } from "@ngx-translate/core";


const log = new Logger('AuthComponent');
@Component({
  selector: 'e-proc-auth',
  styleUrls: ['./auth.component.scss'],
  templateUrl: './auth.component.html',
})
//implements OnInit
export class AuthComponent implements OnInit {

  isAuthenticated = false;
  directions = NbLayoutDirection;
  constructor(private directionService: NbLayoutDirectionService,
    public translate: TranslateService,
    ) {
      if(this.translate.currentLang === "ar-SA"){
        this.directionService.setDirection(this.directions.RTL);
      }
  }

    ngOnInit(): void {
     log.info("Inside Auth Compontent");
  }




}


