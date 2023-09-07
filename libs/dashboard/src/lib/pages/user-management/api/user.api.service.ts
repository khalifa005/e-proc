import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { UserListDto } from '../models/user-list.dto';
import { environment } from '@e-proc/core';
import { UserParameters } from '../models/parameters/user-parameters';

@Injectable({
  providedIn: 'root'
})
export class UserApiService  {
  // Define API
apiURL = environment.apiBaseUrl + '/User';

constructor(private http: HttpClient) {}

// Http Options
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
})};

getPagedList(paramsDto: UserParameters): Observable<any> {
  return this.http
    .post<any>(
      this.apiURL + '/Paging',
      JSON.stringify(paramsDto),
      this.httpOptions
    )
    .pipe(retry(0));
}

register(RegisterObj){
  return this.http.post<any>(`${this.apiURL}/register`,RegisterObj);
}

updateUser(dto : UserListDto): Observable<any> {
  return this.http.put<any>(`${this.apiURL}/update`,dto);
}

delete(id:number): Observable<any> {
  return this.http
    .delete<any>(
      this.apiURL + '/' + id,
      this.httpOptions
    )
    .pipe(retry(0));
}

}
