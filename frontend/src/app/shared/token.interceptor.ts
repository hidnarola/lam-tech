import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
// import { LoginService } from '../../login/login.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = '';
    let islogin = false;
    let loginUser = localStorage.getItem('user');
    try {
      loginUser = JSON.parse(loginUser);
      token = loginUser['token'];
      if (loginUser['data']) {
        islogin = true;
      } else {
        islogin = false;
      }
    } catch (e) {
      islogin = false;
    }
    if (islogin && token) {
      request = request.clone({
        setHeaders: {
          'x-access-token': `${token}`,
        }
      });
    }
    // return next.handle(request).do((event: HttpEvent<any>) => {
    //   if (event instanceof HttpResponse) {
    //     // console.log("request response:",event);
    //     // do stuff with response if you want
    //   }
    // }, (err: any) => {
    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {

          console.log(" all looks good");
          // http response status code
          console.log(event.status);
        }
      },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            // console.log('Response err:', err);
            if (err.status === 401) {
              // redirect to the login route
              // or show a modal
              // this.loginservice.logout();
              // localStorage.clear();
              this.router.navigate(['/login']);
              return false;
            } else {
              return true;
            }
          }
        })
    );
  }
}
