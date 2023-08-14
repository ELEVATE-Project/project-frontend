import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services';
import { localKeys } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard  {
  constructor(private localStorage: LocalStorageService,private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.localStorage.getLocalData(localKeys.USER_DETAILS).then((result:any) => {
      if (result) {
        //this.router.navigate(['/home']);
        return true;
      }
      else {
        this.router.navigate(['/auth/login']);
        return false;
      }
    }).catch(() => {
      this.router.navigate(['/auth/login']);
        return false;
    });
  
  }

 
  
}
