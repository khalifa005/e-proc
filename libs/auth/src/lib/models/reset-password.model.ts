export class ResetPasswordDTO {
  Id : number;
  OldPassword: string;
  NewPassword: string;
  ConfirmPassword: string;

  constructor(id:number, 
             oldPassword: string,
             newPassword: string,
             confirmPassword: string) {
                
    this.Id = id;
    this.OldPassword = oldPassword;
    this.NewPassword = newPassword;
    this.ConfirmPassword = confirmPassword;
  }

}
