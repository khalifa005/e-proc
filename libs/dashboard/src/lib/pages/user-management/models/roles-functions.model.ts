
export class RolesFunctionsDTO {
  Id: number;
  NameEn: string;
  NameAr : string;
  disabled : boolean;
  Checked: boolean;
  Childrens : RolesFunctionsDTO[];


  constructor(id: number, nameEn : string, nameAr : string, disabled : boolean, checked : boolean , childrens : RolesFunctionsDTO[] ) {
    this.Id = id;
    this.NameEn = nameEn;
    this.NameAr = nameAr;
    this.Childrens = childrens;
    this.disabled = disabled;
    this.Checked = checked;
    this.Childrens = childrens;
  }
}

