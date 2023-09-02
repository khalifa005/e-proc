import { PagingParameters } from "./base/paging.model";

export class LookupParameters extends PagingParameters {
}

export class TicketCategoryParameters extends LookupParameters {
  ShowForCustomerPortal?: boolean | null ;
}
