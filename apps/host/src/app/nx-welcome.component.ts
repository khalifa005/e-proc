/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Logger, LookupDto, LookupParameters, AppDefaultValues, ApiResponse, PagedResponse, StatusCode, NotitficationsDefaultValues, convertToFormData, EventObject, capitalizeFirstLetter } from '@e-proc/core';
import { ToastNotificationService } from '@e-proc/nebular';
import { NbWindowService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { ExportToCsv } from 'export-to-csv';
import { Config, Columns, DefaultConfig } from 'ngx-easy-table';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'e-proc-nx-welcome',
  template: `
<nb-card>
  <nb-card-header translate>
    lookups.roles
  </nb-card-header>
  <nb-card-body *ngIf="data" translate>

    <div class="mb-2">

      <button
      *ngxPermissionsOnly="['add-role-action']; authorisedStrategy: 'show'; unauthorisedStrategy: 'remove'"
      nbButton status="success"
      (click)="onAddDialogClicked()"
       translate><nb-icon icon="file-add-outline"></nb-icon>add-new</button>

       <button
       *ngxPermissionsOnly="['export-role-action']; authorisedStrategy: 'show'; unauthorisedStrategy: 'remove'"
       class="btn btn-primary mx-1" (click)="exportToCSV()" translate>CSV-export</button>
    </div>

  <div class="columns" translate>
    <div class="column col-12" translate>
      <ngx-table
        [configuration]="configuration"
        [summaryTemplate]="summaryTemplateRef"
        [loadingTemplate]="loadingTemplate"
        [filtersTemplate]="filtersTemplate"
        [data]="data"
        [columns]="columns"
        [pagination]="pagination"
        (event)="eventEmitted($event)"
        translate >

        <ng-template let-row let-index="index">
          <td>
            <h5>#{{ row.Id }}</h5>
          </td>
          <td>
            <p style="font-size:1rem">
              {{row.NameEn }}
            </p>
          </td>
          <td>
            <p style="font-size:1rem" >
              {{row.NameAr}}
            </p>
          </td>
          <td>
            <div >
              <p style="font-size:1rem">
                {{row.Description}}
              </p>
            </div>
          </td>
          <td>
            <p style="font-size:1rem" [ngClass]="row.IsDeleted ? '' : '' ">
              {{row.IsDeleted | yesNo }}
            </p>
          </td>
          <td>
            <button nbButton size="small" status="primary"
            id="expandButton-{{ index }}"
            (click)="onEditDialogClicked(row.Id)"
            translate>
              <nb-icon [options]="{ animation: { type: 'shake' } }" icon="edit-outline"></nb-icon>
            </button>
          </td>
          <td *ngIf="!row.IsDeleted">
            <button nbButton size="small" status="danger"
            id="expandButton-{{ index }}"
            (click)="onDeletedClicked(row.Id)"
            translate>
              <nb-icon [options]="{ animation: { type: 'flip in Y' } }" icon="trash-2-outline"></nb-icon>
            </button>
          </td>

          <td *ngIf="row.IsDeleted">
            <button nbButton size="small" status="warning"
            id="expandButton-{{ index }}"
            (click)="onReactivateClicked(row.Id)"
            translate>
              <nb-icon [options]="{ animation: { type: 'zoom' } }" icon="refresh-outline"></nb-icon>
            </button>
          </td>
        </ng-template>
      </ngx-table>
      <ng-template #summaryTemplateRef let-total="total" let-limit="limit" let-page="page">
        <th colspan="5" translate>
          <span class="mb-2" translate>table.total-items</span>
          <span class="mb-2">: {{ pagination.count }} </span>
          <span class="mb-2">page: {{ page }} </span>
        </th>
      </ng-template>
    </div>
  </div>

  <ng-template #loadingTemplate>
    <td [attr.colspan]="columns.length">
      <div class="loader">Loading...</div>
    </td>
  </ng-template>

  <ng-template #filtersTemplate>
    <th>
      <input
      type="number"
      nbInput fullWidth
      id="code"
      placeholder="{{ 'lookups.id' | translate }}"
      (keyup.enter)="onIdFilterChnaged($event)"
      [(ngModel)]="lookupParamsDto.Id"
      >
    </th>
    <th>
      <e-proc-custom-input
      [isRequired]="false"
      [disabled]="false"
      [readonly]="false"
      [placeHolder]=" 'lookups.name-en' "
      [(selectedItem)]="lookupParamsDto.NameEn"
      (keyup.enter)="onIdFilterChnaged($event)" >
      </e-proc-custom-input>
    </th>
    <th>
      <e-proc-custom-input
      [isRequired]="false"
      [disabled]="false"
      [readonly]="false"
      [placeHolder]=" 'lookups.name-ar' "
      [(selectedItem)]="lookupParamsDto.NameAr"
      (keyup.enter)="onIdFilterChnaged($event)" >
      </e-proc-custom-input>
    </th>
    <th>
      <e-proc-custom-input
      [isRequired]="false"
      [disabled]="false"
      [readonly]="false"
      [placeHolder]=" 'lookups.description' "
      [(selectedItem)]="lookupParamsDto.Description"
      (keyup.enter)="onIdFilterChnaged($event)" >
      </e-proc-custom-input>
    </th>
    <th>
      <e-proc-boolean-dropdown
      [isRequired]="true"
      [disabled]="false"
      [readonly]="false"
      [selectedItem]="lookupParamsDto.IsDeleted"
      (selectedItemChanged)="onDeletedFilterChnaged($event)">
      </e-proc-boolean-dropdown>
    </th>

    <th>


    </th>
  </ng-template>
  </nb-card-body>
</nb-card>

  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit , OnDestroy {

  private log = new Logger(NxWelcomeComponent.name);
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
    // private readonly cdr: ChangeDetectorRef,
    public localizationService: TranslateService,
    private windowService: NbWindowService) {

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


  onReactivateClicked(valueId: number) {
    const lookupDto = this.data.find(x=> x.Id === valueId);
    lookupDto.IsDeleted = false;
  }

  onDetailsClicked(ticketId: number) {
    // let URL = RolesRoutes.Details.replace(RoutesParamRegx.Id, ticketId.toString());
    // this.router.navigateByUrl(URL);
  }

  onDeletedClicked(valueId: any): void {


  }

  onAddDialogClicked(){

  }

  onEditDialogClicked(valueId: number){

  }

  //to get the sor filter event of the grid
  eventEmitted(event: any): void {
    if (event.event !== 'onClick') {
      this.parseEvent(event);
    }
  }

  //to get the sor filter event of the grid
  private parseEvent(obj: EventObject): void {

  }

  onNameEnFilterChnaged(valueId: any) {
    // this.lookupParamsDto.StatusId = valueId;
  }

  onNameArFilterChnaged(valueId: any) {
    // this.lookupParamsDto.StatusId = valueId;
  }

  onIdFilterChnaged(valueId: any) {
    // this.lookupParamsDto.StatusId = valueId;
  }

  onDeletedFilterChnaged(valueId: any) {
    this.lookupParamsDto.IsDeleted = valueId;
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
