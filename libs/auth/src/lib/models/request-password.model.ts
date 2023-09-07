
export class RequestPasswordDto {
  MobileNumber : string;
  IDType: string;
  IDNumber : string;
  PassportNumber:  string;

  constructor(mobileNumber: string,
              iDType: string,
              iDNumber: string,
              passportNumber: string) {

    this.MobileNumber = mobileNumber;
    this.IDType = iDType;
    this.IDNumber = iDNumber;
    this.PassportNumber = passportNumber;
  }

}
