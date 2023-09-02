import { PagingParameters } from "./base/paging.model";

export class CustomerParameters extends PagingParameters {
  Code?: string | null ;
  CustomerId?: number | null;
}
