import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any>{
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userobj;
  }
  userobj={
    userID:10,
    username:'shital'
  }
}