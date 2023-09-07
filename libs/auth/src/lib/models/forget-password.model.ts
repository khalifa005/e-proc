export class ForgetPasswordDto {
  Id : number
  NewPassword: string
  ConfirmPassword: string;

  constructor(id: number,
              newPassword: string,
              confirmPassword: string) {

    this.Id = id;
    this.NewPassword = newPassword;
    this.ConfirmPassword = confirmPassword;
  }

}
