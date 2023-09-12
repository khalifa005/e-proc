import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ApiResponse, AppDefaultValues, Logger, LookupDto, LookupParameters, NotitficationsDefaultValues, PagedResponse, StatusCode } from "@e-proc/core";
import { Subscription } from "rxjs";
import { ToastNotificationService } from "../../../services/toast-notification.service";

@Component({
  selector: 'e-proc-role-dropdown',
  templateUrl: './role-dropdown.component.html',
  styleUrls: ['./role-dropdown.component.scss']
})
export class RoleDropdownComponent implements OnInit, OnDestroy {
  private log = new Logger(RoleDropdownComponent.name);

  @Output() selectedItemChanged: EventEmitter<number> = new EventEmitter();
  @Input() selectedItem!: number;
  @Input() readonly = false;
  @Input() isRequired = false;
  @Input() isMultiple = false;
  @Input() hideSuperAdmin = false;
  @Input() disabled = false;
  @Input() formcontrol!: FormControl;
  @Input() items!: LookupDto[];
  @Input() lable: string = "Roles";
  private subs: Subscription[] = [];



  dropDownAllOption = new LookupDto(AppDefaultValues.DropDownAllOption,
    AppDefaultValues.DropDownAllOptionAr,
     AppDefaultValues.DropDownAllOptionEn);

  constructor(
    private toastNotificationService:ToastNotificationService) {

  }

  ngOnInit() {
    this.getLookups();
  }

  getLookups(){
    // let listSub = this.apiService.getPagedList(this.lookupParamsDto)
    // .subscribe((response : ApiResponse<PagedResponse<LookupDto>>) => {
    //   if(response.StatusCode == StatusCode.Success){
    //     this.roles = response.Data.Items;
    //     if(this.hideSuperAdmin){
    //       this.roles = this.roles.filter(x=> x.Id!= UserRoleEnum.SuperAdmin);
    //     }
    //   }else{
    //     this.log.error(response);
    //     this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, 'roles-types-lookup-dropdown-api-service', response.ErrorMessage);
    //   }
    // },
    // (erorr) => {
    //   this.log.error(erorr);
    //   this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, 'roles-types-lookup-dropdown-api-service', erorr);
    // });

    // this.subs.push(listSub);
  }

  onItemChanged() {
    this.selectedItemChanged.emit(this.selectedItem);
  }
  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }

}
