import { PagingParameters } from "./base/paging.model";

export class LookupParameters extends PagingParameters {
  Id?: number | null;
  NameAr?: string | null = "";
  NameEn?: string | null = "";
  Description?: string | null = "";
}

