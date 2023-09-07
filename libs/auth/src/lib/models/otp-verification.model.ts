export class OTPVerificationDto {
  Id : number
  OtpCode: string

  constructor(id: number,
              otpCode: string) {

    this.Id = id;
    this.OtpCode = otpCode;
  }

}
