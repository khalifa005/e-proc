import { UserRole } from "@e-proc/core";

export class AuthenticateDto {
  AccessToken: string;
  Id: number;
  NeedVerification!: boolean;
  UserRoles! : UserRole [];


  constructor(accessToken: string,id: number,needVerification : boolean, userRoles : UserRole[] ) {
    this.AccessToken = accessToken;
    this.Id = id;
    this.NeedVerification = needVerification;
    this.UserRoles = userRoles;
  }
}

