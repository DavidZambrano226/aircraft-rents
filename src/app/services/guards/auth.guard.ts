import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('isAuthenticate')) {

      const enabled = localStorage.getItem('isAuthenticate');
      if (!enabled) {
        return this.router.navigate(['/login']);
      } else {
        return true;
      }
    } else {
      return this.router.navigate(['/login']);
    }
  }
  
}
