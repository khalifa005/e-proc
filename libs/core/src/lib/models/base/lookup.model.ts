/* eslint-disable @typescript-eslint/no-inferrable-types */
import { BasicTrackerEntityDto } from "./basic-tracker-entity.model";

export class LookupDto extends BasicTrackerEntityDto {
  Id: number;
  NameEn: string;
  NameAr: string;
  Description?: string;
  // IsDeleted?: boolean;

  constructor(id: number = 0, nameAr: string = '', nameEn: string = '') {
    super();
    this.Id = id;
    this.NameAr = nameAr;
    this.NameEn = nameEn;
  }
}

