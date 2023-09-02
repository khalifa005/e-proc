import { LanguageEnum, I18nService } from '@e-proc/core';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from "@angular/core";

//how to use it
//{{x.nameEn | translator : x.nameAr}}

@Pipe({ name: 'translator' })
export class TranslatorPipe implements PipeTransform{

    constructor(private i18nService: I18nService) {}


    transform(englishLanguage:string, arabicLanguage:string):string {
        if( this.i18nService.language == LanguageEnum.En){
            if(!englishLanguage){
               return arabicLanguage;
            }
            return englishLanguage;
        }
        else{
            if(!arabicLanguage){
                return englishLanguage;
             }
            return arabicLanguage;
        }
    }


}

