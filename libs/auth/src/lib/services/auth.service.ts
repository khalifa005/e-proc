/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import  *  as CryptoJS from  'crypto-js';
import { Logger, UserRole, environment, loadPermissions } from '@e-proc/core';
import { LoginDto } from '../models/login.model';
import { ForgetPasswordDto } from '../models/forget-password.model';
import { RequestPasswordDto } from '../models/request-password.model';
import { ResetPasswordDTO } from '../models/reset-password.model';
import { OTPVerificationDto } from '../models/otp-verification.model';
import { UserProfileDTO } from '../models/user-profile.model';
import { UserStoreService } from './user-store.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  readonly adminAppTokenKey:string = "admin-app-token";
  readonly adminCrmRoleKey:string = "admin-crm-role";
  readonly loggedPermissionsKey:string = "logged-permissions";
  key = "ACIG@2023@Pass...";
  private log = new Logger(AuthService.name);
  private baseUrl : string = environment.apiBaseUrl + '/user';
  private userPayload : any;
  userRoles! :UserRole[];

  constructor(private http : HttpClient ,
     private router: Router,
     private permissionsService: NgxPermissionsService,
     private userStoreService: UserStoreService
     ) {

  }

  login(loginObj : LoginDto){
    return this.http.post<any>(`${this.baseUrl}/login`,loginObj);
  }

  InitPayload(){
    this.userPayload = this.decodeToken();
  }

  updateUserProfile(userProfileObj: UserProfileDTO){
    return this.http.put<any>(`${this.baseUrl}/profile`,userProfileObj);
  }

  resetUserPassword(userObj: ResetPasswordDTO){
    return this.http.put<any>(`${this.baseUrl}/reset`,userObj);
  }

  requestPassword(userObj: RequestPasswordDto){
    return this.http.put<any>(`${this.baseUrl}/requestPassword`,userObj);
  }

  forgetPassword(userObj: ForgetPasswordDto){
    return this.http.post<any>(`${this.baseUrl}/forget`,userObj);
  }

  otpVerification(otpObj: OTPVerificationDto){
    return this.http.put<any>(`${this.baseUrl}/verify`,otpObj);
  }

  generateNewOTPCode(id: number){
    return this.http.put<any>(`${this.baseUrl}/otp`, id);
  }

  signOut(){
    //localStorage.clear();
    localStorage.removeItem(this.adminAppTokenKey);
    localStorage.removeItem(this.adminCrmRoleKey);
    localStorage.removeItem(this.loggedPermissionsKey);
    this.permissionsService.flushPermissions();
    this.userStoreService.setFullNameForStore("");

    this.router.navigateByUrl('auth/login');
  }

  /*
   ** Token manipulation
  */
  storeToken(tokenValue : string){
    localStorage.setItem(this.adminAppTokenKey, tokenValue);
  }

  getToken(){
    return localStorage.getItem(this.adminAppTokenKey);
  }

  isLoggedIn(): boolean{
     return !!localStorage.getItem(this.adminAppTokenKey);
  }

  decodeToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken();
    return jwtHelper.decodeToken(token as string);
  }

  getUserNameFromToken(): string | undefined{
    if(this.userPayload){
      return this.userPayload.unique_name + " " + this.userPayload.family_name;
    }
    return ""
  }

  getUserInfoFromToken() : UserProfileDTO | undefined{
    if(this.userPayload){
       const roles = this.userPayload.role;
       return {
        Id : this.userPayload.nameid,
        FirstName: this.userPayload.unique_name,
        LastName : this.userPayload.family_name,
        Email : this.userPayload.email,
        Mobile : this.userPayload.given_name,
        userRoleInfo : this.perpareUserRoleInfo(roles)
       };
    }
    return undefined;
  }

  perpareUserRoleInfo(roles: any){
    const userRolesInfo : UserRole[] = [];
    if(roles!="")
    {
      const rolesSplit = roles.split("|");
      for (let index = 0; index < rolesSplit.length; index++) {
        const userRole = new UserRole();
        const $roleElement = rolesSplit[index].split("=");
        if($roleElement.length > 0)
        {
          const roleNameSpit = $roleElement[0].split("$*");
          if(roleNameSpit != undefined){
            userRole.RoleNameEn = roleNameSpit[0];
            userRole.RoleNameAr = roleNameSpit[1];
          }
          else{
            userRole.RoleNameEn = $roleElement[0];
            userRole.RoleNameAr = $roleElement[0];
          }

          try {
            userRole.RoleId = parseInt($roleElement[1]);
          } catch (error) {}
          userRolesInfo.push(userRole);
        }
      }
    }

    return userRolesInfo;
  }

  setSelectedRole(roleId: any){
    localStorage.setItem(this.adminCrmRoleKey, this.encrypt(roleId.toString()));
  }

  getSelectedRole(): number{
    if(localStorage.getItem(this.adminCrmRoleKey)){
      return parseInt(this.decrypt(localStorage.getItem(this.adminCrmRoleKey) as string));
    }
    else{
      return -1;
    }

  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }
  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }

  setRolePermissions(permissions: UserRole[]){
    localStorage.setItem(this.loggedPermissionsKey, this.encrypt(JSON.stringify(permissions)));
  }

  getRolePermissions(roleId : number): string[]{
    if(localStorage.getItem(this.loggedPermissionsKey)!="" && localStorage.getItem(this.loggedPermissionsKey)!= null)
    {
      let permissionsObj : UserRole[] = JSON.parse(this.decrypt(localStorage.getItem(this.loggedPermissionsKey) as string));
      permissionsObj = permissionsObj.filter(o=>o.RoleId == roleId);

      if(permissionsObj.length > 0){
        return permissionsObj[0].RoleFunctions as string[];
      }
    }
    return [];
  }


  // "userRoles": [
  //   { "RoleId": 1, "RoleNameEn": "", "RoleNameAr":"", "RoleFunctions": ["show-lookups", "show-add-role"] },
  //   { "RoleId": 2, "RoleNameEn": "", "RoleNameAr":"", "RoleFunctions": ["show-add-role"] },
  // ];

//   "sub": "1234567890",
//   "name": "Mahmoud khalifa",
//   "iat": 1516239022,
//   "nameid":"1",
//   "unique_name":"Mahmoud",
//   "family_name":"khalifa",
//   "email":"khalifa@gmail.com",
//   "given_name":"kh"

// }

  fakeLogin(){
    this.storeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1haG1vdWQga2hhbGlmYSIsImlhdCI6MTUxNjIzOTAyMiwibmFtZWlkIjoiMSIsInVuaXF1ZV9uYW1lIjoiTWFobW91ZCIsImZhbWlseV9uYW1lIjoia2hhbGlmYSIsImVtYWlsIjoia2hhbGlmYUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoia2gifQ.SJYStm3rOs8cYSSXXVdJtiQe0ITfu4TIXTocGAqDn1A");
    this.log.info("token initalized");
    this.InitPayload();
    const userFullName = this.getUserNameFromToken();
    this.userStoreService.setFullNameForStore(userFullName as string);

    //userRolesFakeResponse:UserRole
    this.userRoles =
    [
      { RoleId: 1, RoleNameEn:"Admin",  RoleNameAr:"Admin", RoleFunctions: ["SuperAdmin", "view-role-list", "add-role-action","export-role-action"] },
      { RoleId: 2, RoleNameEn: "Monitor", RoleNameAr:"Monitor", RoleFunctions: ["view-role-list"] },
    ];

    //-- SET Permission for User With every Role
    this.setRolePermissions(this.userRoles);

    //-- SET Default Role & Load Permission of This Role
    this.setSelectedRole(this.userRoles[0].RoleId);

    loadPermissions(this.permissionsService, this.userRoles[0].RoleFunctions as string[]);
  }

  //if the user have multi role and we support to browse the app with 1
  changeRole(roleId : number)
  {
    const currentRole = roleId;
     //-- SET Default Role & filter Permission of selected Role
    this.setSelectedRole(roleId);
    const permissions = this.getRolePermissions(roleId);

    //--- Load Permisssion of selected Role
    loadPermissions(this.permissionsService, permissions);

    // let menu =  sideMenuTranslationInt(this.authService, this.localizationService);
    // this.userStoreService.changeSideMenu(menu);
    // this.router.navigateByUrl("/");

  }


}
