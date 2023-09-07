/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-extra-boolean-cast */
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse, AppDefaultValues, EventObject, Logger, LookupDto, LookupParameters, NotitficationsDefaultValues, PagedResponse, StatusCode, capitalizeFirstLetter, convertToFormData } from '@e-proc/core';
import { ToastNotificationService } from '@e-proc/nebular';
import { NbDialogService, NbWindowService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { ExportToCsv } from 'export-to-csv';
import { Config, Columns, DefaultConfig } from 'ngx-easy-table';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RoleApiService } from './api/roles.api.service';
import { RoleFormComponent } from './form/role-form.component';

@Component({
  selector: 'e-proc-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit , OnDestroy {

  private log = new Logger(RoleComponent.name);
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  private subs: Subscription[] = [];
  selectedItem = '2';

  public configuration: Config;
  public columns: Columns[];
  public pagination = {
    limit: 10,//page-size
    offset: 0,//page index
    count: -1,
    sort: '',
    order: '',
  };

  data: LookupDto[] = [
    {Id:1, NameEn:"Admin",NameAr:"مدير النظام",Description:"super admin over system" },
    {Id:2, NameEn:"Monitor",NameAr:"مراقب",Description:"view system" }
  ] ;
  lookupParamsDto = new LookupParameters();

  dropDownAllOption = new LookupDto(AppDefaultValues.DropDownAllOption,
    AppDefaultValues.DropDownAllOptionAr,
     AppDefaultValues.DropDownAllOptionEn);

  constructor(private toastNotificationService:ToastNotificationService,
    private apiService:RoleApiService,
    private readonly cdr: ChangeDetectorRef,
    public localizationService: TranslateService,
    private dialogService: NbDialogService,
    private windowService: NbWindowService,
     private router: Router) {

    this.lookupParamsDto.IsDeleted = false;
    this.lookupParamsDto.PageIndex = 1;
    this.lookupParamsDto.PageSize = this.pagination.limit;
    this.lookupParamsDto.Search = "";
    this.getTableHeaderName();
  }

  getTableHeaderName() {

    const isEngLanguage = this.localizationService.currentLang === 'en-US';
    this.columns = [
    { key: 'Id', title: isEngLanguage ? 'Id' : 'الرقم التعريفي' },
    { key: 'NameEn', title: isEngLanguage ? 'Name english' : 'الاسم الانجليزي' },
    { key: 'NameAr', title: isEngLanguage ? 'Name arabic' : 'الاسم لعربي' },
    { key: 'Description', title: isEngLanguage ? 'Description' : 'التفاصيل' },
    { key: 'IsDeleted', title: isEngLanguage ? 'Is deleted' : 'هل تم مسة' },
    ];

  }

  ngOnInit() {
    this.configuration = { ...DefaultConfig };
    this.configuration.tableLayout.hover = !this.configuration.tableLayout.hover;
    this.configuration.tableLayout.striped = !this.configuration.tableLayout.striped;
    this.configuration.tableLayout.style = 'big';
    this.configuration.isLoading = true;
    this.configuration.serverPagination = true;
    this.configuration.threeWaySort = true;
    this.configuration.resizeColumn = true;
    this.configuration.rowReorder = true;
    this.configuration.columnReorder = true;
    this.configuration.fixedColumnWidth = false;
    // this.getData();
    this.configuration = { ...DefaultConfig };
  }

  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private getData(): void {

    this.apiService
    .getPagedList(this.lookupParamsDto)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next:(response:ApiResponse<PagedResponse<LookupDto>>) => {

       if(response.StatusCode == StatusCode.Success){
        this.data = response.Data.Items;
        this.cdr.markForCheck();
        // ensure this.pagination.count is set only once and contains count of the whole array, not just paginated one
        this.pagination.count = response.Data.TotalCount;
        this.pagination.limit =  response.Data.PageSize;
        this.pagination.offset =  response.Data.CurrentPage;
        this.pagination = { ...this.pagination };
        this.toastNotificationService.showToast(NotitficationsDefaultValues.Success, 'roles-api-service-list-api-service', "loaded the data");
       }else{
         this.log.error(response);
         this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, 'roles-api-service-list-api-service', response.ErrorMessage);
       }
         },
        error:(error:any)=> {
         this.log.error(error);
         this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, 'roles-api-service', error);
        }
   });


  }

  onReactivateClicked(valueId: number) {
    const lookupDto = this.data.find(x=> x.Id === valueId);
    lookupDto.IsDeleted = false;
    this.updateData(lookupDto);
  }

  updateData(lookupDto: LookupDto): void {
    const formData = convertToFormData(lookupDto);
    this.apiService
    .update(formData)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next:(response: ApiResponse<any>) => {

       if(response.StatusCode == StatusCode.Success){
        this.toastNotificationService.showToast(NotitficationsDefaultValues.Success, 'item', 'updated');
        this.cdr.markForCheck();
        this.getData();
       }else{
        this.log.error(response);
        this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, 'roles--update-api-service', response.ErrorMessage);
       }
         },
        error:(error:any)=> {
          this.log.error(error);
          this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, 'roles--update-api-service', error.ErrorMessage);
        }
   });

  }

  onDetailsClicked(ticketId: number) {
    // let URL = RolesRoutes.Details.replace(RoutesParamRegx.Id, ticketId.toString());
    // this.router.navigateByUrl(URL);
  }

  onDeletedClicked(valueId: any): void {

    this.apiService
    .delete(valueId)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
         next:(response:ApiResponse<number>) => {

        if(response.StatusCode == StatusCode.Success){
          this.toastNotificationService.showToast(NotitficationsDefaultValues.Success, 'item', 'deleted');
          this.cdr.markForCheck();
          this.getData();
        }else{
          this.log.error(response);
          this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, 'roles-api-service-delete-api-service', response.ErrorMessage);
        }
          },
         error:(error:any)=> {
          this.log.error(error);
          this.toastNotificationService.showToast(NotitficationsDefaultValues.Danger, 'roles-api-service', error);
         }
    });

  }

  onAddDialogClicked(){
    this.windowService.open(RoleFormComponent,
      {
       closeOnEsc:true
      })
      .onClose.subscribe(response => {
        if(response === StatusCode.Success){
          this.getData();
        }
      });

  }

  onEditDialogClicked(valueId: number){
    const lookupDto = this.data.find(x=> x.Id === valueId);

    this.windowService.open(RoleFormComponent, {
       closeOnEsc:true,
       context:{
      passedModelDto: lookupDto
    } })
      .onClose.subscribe(response => {
        if(response === StatusCode.Success){
          this.getData();
        }
      });

  }

  //to get the sor filter event of the grid
  eventEmitted(event: { event: string; value: any }): void {
    if (event.event !== 'onClick') {
      this.parseEvent(event);
    }
  }

  //to get the sor filter event of the grid
  private parseEvent(obj: EventObject): void {

    if(obj.event === "onPagination"){
      this.pagination.limit = obj.value.limit ? obj.value.limit : this.pagination.limit;
      this.lookupParamsDto.PageSize = obj.value.limit ? obj.value.limit : this.pagination.limit;

      this.pagination.offset = obj.value.page ? obj.value.page : this.pagination.offset;
      this.lookupParamsDto.PageIndex = obj.value.page ? obj.value.page : this.lookupParamsDto.PageIndex;
    }

    if(obj.event === "onOrder"){
      this.pagination.sort = !!obj.value.key ? obj.value.key : this.pagination.sort;
      this.pagination.order = !!obj.value.order ? obj.value.order : this.pagination.order;

      if(this.pagination.order){
        this.lookupParamsDto.Sort = this.pagination.sort + capitalizeFirstLetter(this.pagination.order);
      }
    }

    this.pagination = { ...this.pagination };
    this.getData();
  }

  onNameEnFilterChnaged(valueId: any) {
    // this.lookupParamsDto.StatusId = valueId;
    this.getData();
  }

  onNameArFilterChnaged(valueId: any) {
    // this.lookupParamsDto.StatusId = valueId;
    this.getData();
  }

  onIdFilterChnaged(valueId: any) {
    // this.lookupParamsDto.StatusId = valueId;
    this.getData();
  }

  onDeletedFilterChnaged(valueId: any) {
    this.lookupParamsDto.IsDeleted = valueId;
    this.getData();
  }


  exportToCSV(): void {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: false,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    };
    const csvExporter = new ExportToCsv(options);

    csvExporter.generateCsv(this.data);
  }

}
