/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private fullName$ = new BehaviorSubject<string>("");
  // private sideMenus$ = new BehaviorSubject<NbMenuItem[]>(NbMenuItem[{new NbMenuItem{title}}]);
  private sideMenu$ = new BehaviorSubject<any>("");
  currentSideMenu = this.sideMenu$.asObservable();

  constructor() { }


  public setFullNameForStore(fullname : string){
    this.fullName$.next(fullname);
  }

  public getFullNameFromStore() : Observable<string>{
    return this.fullName$.asObservable();
  }


  public changeSideMenu(menu :NbMenuItem[]){
    this.sideMenu$.next(menu);
  }

}
