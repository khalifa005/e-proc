import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ApiResponse, environment, LookupDto, LookupParameters, PagedResponse } from '@e-proc/core';
@Injectable({
  providedIn: 'root',
})
export class RoleApiService {
  // Define API
  apiURL = environment.apiBaseUrl + '/Roles';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
})};


  getPagedList(lookupParamsDto: LookupParameters): Observable<ApiResponse<PagedResponse<LookupDto>>> {
    return this.http
      .post<any>(
        this.apiURL + '/Paging',
        JSON.stringify(lookupParamsDto),
        this.httpOptions
      )
      .pipe(retry(0));
  }


  add(formData): Observable<any> {
    return this.http
      .post<any>(
        this.apiURL,
        formData
      )
      .pipe(retry(0));
  }

  update(formData): Observable<any> {
    return this.http
      .put<any>(
        this.apiURL,
        formData
      )
      .pipe(retry(0));
  }

  delete(id:number): Observable<any> {
    return this.http
      .delete<any>(
        this.apiURL + '/' + id,
        this.httpOptions
      )
      .pipe(retry(0));
  }

 getListRoleFunctions(roleId: number): Observable<any> {
  return this.http.post<any>(`${this.apiURL}/functions`,roleId);
}

// saveRoleFunctions(rolesFunction: RolesManagementDto): Observable<any> {
//   return this.http.put<any>(`${this.apiURL}/editfunctions`,rolesFunction);
// }


}
