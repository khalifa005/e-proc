export class ApiResponse<t> {
  Data?: t;
  Errors?: string[] | null;
  StatusCode?: number;
  ErrorMessageAr?: string | null;
  ErrorMessage?: string | null;
}
