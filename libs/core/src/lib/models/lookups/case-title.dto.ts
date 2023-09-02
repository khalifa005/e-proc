import { LookupDto } from "../base/lookup.model";

export class CaseTitleDto extends LookupDto {

    InsuranceTypeId?: number;
    InsuranceType?:LookupDto;
    HasCancellationRequestDependency?: boolean;
    HasPolicyDataDependency?: boolean;
    ShowForCustomerPortal?: boolean;

    constructor(){
      super();
    }
  }

