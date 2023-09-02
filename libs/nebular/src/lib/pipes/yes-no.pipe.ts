import { Pipe, PipeTransform } from '@angular/core';
import { LanguageEnum, I18nService } from '@e-proc/core';

@Pipe({
  name: 'yesNo'
})
export class YesNoPipe implements PipeTransform {

  constructor(private i18nService: I18nService) {}


  transform(option:boolean):string {
      if( this.i18nService.language == LanguageEnum.En){
          if(option){
             return 'Yes';
          }
          return 'No';
      }
      else{
          if(option){
              return "نعم";
           }
          return "لا";
      }
  }


}
