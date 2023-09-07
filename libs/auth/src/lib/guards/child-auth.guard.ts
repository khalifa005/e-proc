import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Logger } from "@e-proc/core";
import { Observable } from "rxjs";

const log = new Logger("child-guard");

@Injectable({providedIn:'root'})

export class ChildAuthGuard implements CanActivateChild {

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    log.info("hi from child guard");

    return false;
  }


}

// @Injectable({
//   providedIn: 'root'
// })
// class PermissionsService {

//   constructor(private router: Router) {}

//   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//       //your logic goes here
//   }
// }

// export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
//   return inject(PermissionsService).canActivate(next, state);
// }
