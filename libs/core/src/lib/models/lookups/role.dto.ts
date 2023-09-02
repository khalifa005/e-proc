import { LookupDto } from "../base/lookup.model";

export class RoleDto extends LookupDto {

   ReportToRoleId : number | undefined;
    constructor(){
      super();
    }
  }

