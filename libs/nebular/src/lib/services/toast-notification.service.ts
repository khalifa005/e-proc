import { Injectable } from '@angular/core';
import { NbComponentStatus, NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbIconConfig, NbToastrService } from '@nebular/theme';
import { CoreModule, NotitficationsDefaultValues } from '@e-proc/core';
@Injectable({
  providedIn: 'root'
})
export class ToastNotificationService {

constructor(private toastrService: NbToastrService) { }

index = 1;
destroyByClick = true;
duration = 20000;
hasIcon = true;
position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
preventDuplicates = false;
// status: NbComponentStatus = NotitficationsDefaultValues.Primary;


 showToast(type: NbComponentStatus,
  title: string ,
  body: string) {

  const config = {
    status: type,
    destroyByClick: this.destroyByClick,
    duration: this.duration,
    hasIcon: this.hasIcon,
    position: this.position,
    preventDuplicates: this.preventDuplicates,
  };
  const titleContent = title ? `. ${title}` : '';

  this.index += 1;
  this.toastrService.show(
    body,
    `Toast ${this.index}${titleContent}`,
    config);
}

showError(
  title: string,
  body: string) {

  const config = {
    status: NotitficationsDefaultValues.Danger,
    destroyByClick: false,
    duration: this.duration,
    hasIcon: this.hasIcon,
    position: this.position,
    preventDuplicates: this.preventDuplicates,
  };
  const titleContent = title ? `. ${title}` : '';

  this.index += 1;
  this.toastrService.show(
    body,
    `Toast ${this.index}${titleContent}`,
    config);
}

showNotificationWithCustomIcon(
  type: NbComponentStatus,
  iconName: string,
  title: string,
  body: string) {

  const iconConfig: NbIconConfig = { icon: iconName, pack: 'eva' };

  const config = {
    status: type,
    destroyByClick: this.destroyByClick,
    duration: this.duration,
    hasIcon: this.hasIcon,
    icon: iconConfig,
    position: this.position,
    preventDuplicates: this.preventDuplicates,
  };

  const titleContent = title ? `. ${title}` : '';

//  this.toastrService.show('Message', `Toast: ${++this.index}`, iconConfig);

  this.index += 1;
  this.toastrService.show(
    body,
    `Toast ${this.index}${titleContent}`,
    config);
}

types: NbComponentStatus[] = [
  'primary',
  'success',
  'info',
  'warning',
  'danger',
];
positions: string[] = [
  NbGlobalPhysicalPosition.TOP_RIGHT,
  NbGlobalPhysicalPosition.TOP_LEFT,
  NbGlobalPhysicalPosition.BOTTOM_LEFT,
  NbGlobalPhysicalPosition.BOTTOM_RIGHT,
  NbGlobalLogicalPosition.TOP_END,
  NbGlobalLogicalPosition.TOP_START,
  NbGlobalLogicalPosition.BOTTOM_END,
  NbGlobalLogicalPosition.BOTTOM_START,
];

quotes = [
  { title: "1", body: 'We rock at Angular' },
  { title: "2", body: 'Titles are not always needed' },
  { title: "3", body: 'Toastr rock!' },
];
openRandomToast () {
  const typeIndex = Math.floor(Math.random() * this.types.length);
  const quoteIndex = Math.floor(Math.random() * this.quotes.length);
  const type = this.types[typeIndex];
  const quote = this.quotes[quoteIndex] ;

  this.showToast(type, quote.title, quote.body);
}

}
