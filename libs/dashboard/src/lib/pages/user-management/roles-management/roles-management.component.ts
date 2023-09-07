// /* eslint-disable @typescript-eslint/no-empty-function */
// /* eslint-disable @angular-eslint/no-empty-lifecycle-method */
// import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import { TreeItem, TreeviewComponent, TreeviewConfig, TreeviewItem } from '@treeview/ngx-treeview';
// import { Subscription } from 'rxjs';
// import { TranslateService } from '@ngx-translate/core';
// import { RolesManagementDto } from '../models/role-management.dto';
// import { ApiResponse, Logger, LookupDto, NotitficationsDefaultValues, StatusCode } from '@e-proc/core';
// import { AuthService } from '@e-proc/auth';
// import { ToastNotificationService } from '@e-proc/nebular';
// import { RolesFunctionsDTO } from '../models/roles-functions.model';

// @Component({
//   selector: 'e-proc-roles-management',
//   templateUrl: './roles-management.component.html',
//   styleUrls: ['./roles-management.component.scss']
// })
// export class RolesManagementComponent implements OnInit, OnDestroy {

//   private log = new Logger(RolesManagementComponent.name);
//   private subs: Subscription[] = [];

//   @ViewChild(TreeviewComponent, { static: false }) treeviewComponent: TreeviewComponent;

//   items: TreeviewItem[] = [];
//   showSubmitButton : boolean = false;
//   currentRoleId : number = 0;
//   config = TreeviewConfig.create({
//     hasCheckBoxes: true,
//     hasAllCheckBox: true,
//     hasFilter: true,
//     hasCollapseExpand: true,
//     decoupleChildFromParent: false,
//     maxHeight: 400,
//     compact: false
//   });

//   constructor(
//     // private apiRolesService: RolesApiService,
//     private readonly cdr: ChangeDetectorRef,
//     private authService: AuthService,
//     public translate: TranslateService,
//     private toastNotificationService:ToastNotificationService) { }

//   ngOnInit(): void {
//   }

//   ngOnDestroy() {
//     this.subs.forEach((s) => s.unsubscribe());
//   }

//   onSelectedRoleChnaged(valueId){
//     this.currentRoleId = valueId;
//     this.getData(valueId);
//   }

//  private getData(valueId : number){

//   if(valueId == -1){
//     this.items = [];
//     this.showSubmitButton = false;
//     return;
//   }

//   const fakeData:RolesFunctionsDTO[] = [
//     {Id:1, NameAr:"show-list", NameEn:"show-list"}
//   ];
//   this.items = this.formateTreeResponse(fakeData);
//   this.showSubmitButton = this.items.length > 0;

//   // const rolesFunctions = this.apiRolesService.getListRoleFunctions(valueId)
//   // .subscribe({
//   //   next: ((response : ApiResponse<RolesFunctionsDTO[]>) => {
//   //     if(response.StatusCode === StatusCode.Success)
//   //     {
//   //       this.items = this.formateTreeResponse(response.Data);
//   //       this.showSubmitButton = this.items.length > 0;
//   //     }
//   //     else{
//   //       this.log.info(response.ErrorMessage);
//   //       this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, 'lookup', response.ErrorMessage);
//   //     }
//   //   }),
//   //   error: (err => {
//   //     this.log.info(err?.error?.ErrorMessage);
//   //     this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, 'lookup', err?.error?.ErrorMessage);
//   //   })
//   // });

//   // this.subs.push(rolesFunctions);
//  }

//  private formateTreeResponse(RolesFunctionsDTO : RolesFunctionsDTO[]) : TreeviewItem [] {
//   const treeviewItems : TreeviewItem[] =[];
//     for (let index = 0; index < RolesFunctionsDTO.length; index++) {
//       const element = RolesFunctionsDTO[index];
//       const treeItems = this.buildChildTree(element.Childrens);
//       const parentName = this.translate.currentLang === "ar-SA" ? element.NameAr : element.NameEn;
//       const extraCategory = new TreeviewItem({ text: parentName , value: element.Id, checked: element.Checked, children:treeItems }, true);
//       extraCategory.correctChecked();
//       treeviewItems.push(extraCategory);
//     }
//     return treeviewItems;
//   }

//  private buildChildTree(childrens:RolesFunctionsDTO[]) {
//   const treeItems : TreeItem[] =[];
//     for (let childIndex = 0; childIndex < childrens.length; childIndex++) {
//       const childElement = childrens[childIndex];
//       const elementName = this.translate.currentLang === "ar-SA" ? childElement.NameAr : childElement.NameEn;
//       treeItems.push({text :  elementName , value: childElement.Id, checked: childElement.Checked , children : this.buildChildTree(childElement.Childrens) });
//     }

//     return treeItems;
//   }


//   onSelectedTreeChange(event){

//   }


//   collectSelectedTreeIds(elementItems : TreeviewItem [] , rolsIds){
//     elementItems.forEach(element => {
//       if(element.checked || element.indeterminate){
//         rolsIds.push(element.value);
//       }

//        let children = element.children;
//        if(children!= undefined)
//           this.collectSelectedTreeIds(children,rolsIds);
//     });
//   }


//   saveRoleFunctions(){

//     //-- Validate
//     if(this.treeviewComponent.selection.checkedItems.length <= 0){
//       const title = this.translate.instant('usermanagement.roles-management');
//       this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, title, 'Select at least one role function');
//       return;
//    }

//    const roleId = this.currentRoleId;
//    if(roleId<=0){
//     const title = this.translate.instant('usermanagement.roles-management');
//      this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, title, 'Select Role');
//      return;
//    }

//    //--Collect Data
//    const roleFunctions : RolesManagementDto = {};
//     roleFunctions.RoleId = roleId;
//     const functionsIds = [] ;
//     this.treeviewComponent.items.every(x => x.correctChecked());
//     this.collectSelectedTreeIds(this.treeviewComponent.items ,functionsIds);
//     roleFunctions.RoleFunctionIds = functionsIds;
//     const title = this.translate.instant('usermanagement.roles-management');
//      //-- Send To Backend ()
//      const rolesFunctions = this.apiRolesService.saveRoleFunctions(roleFunctions)
//   .subscribe({
//     next: ((response : ApiResponse<LookupDto>) => {
//       if(response.StatusCode === StatusCode.Success)
//       {
//         const body = this.translate.instant('data-saved-successfully');

//         this.toastNotificationService.showToast(NotitficationsDefaultValues.Success, title, body);

//       }
//       else{
//         this.log.info(response.ErrorMessage);
//         this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, title, response.ErrorMessage);
//       }
//     }),
//     error: (err => {
//       this.log.info(err?.error?.ErrorMessage);
//       this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, title, err?.error?.ErrorMessage);
//     })
//   });

//   this.subs.push(rolesFunctions);

//   }

// }
