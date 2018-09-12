import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
  public authToken;
  private isAuthenticated = true; // Set this value dynamically

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = localStorage.getItem('user');
    if (user) {
      return true
    }
    if(state.url.includes('/admin')) {
      this.router.navigate(['/admin/login']);
    } else if(state.url.includes('/admin') && !user.hasOwnProperty('admin')) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['']);
    }
    return false;
  }
}