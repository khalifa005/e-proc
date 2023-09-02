export class PagedResponse<t> {
  Items?: t[];
  CurrentPage?: number | null;
  TotalPages?: number | null;
  PageSize?: number | null;
  TotalCount?: number | null;
}

