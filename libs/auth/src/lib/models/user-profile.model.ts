import { UserRole } from "@e-proc/core";

export class UserProfileDTO {
  Id : number;
  FirstName: string;
  LastName: string;
  Email: string;
  Mobile: string;
  userRoleInfo?: UserRole[];

  constructor(id:number,
              firstName: string,
              lastName: string ,
              email: string ,
              mobile: string,
              userRole: UserRole[]) {

    this.Id = id;
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Email = email;
    this.Mobile = mobile;
    this.userRoleInfo = userRole;
  }

}
