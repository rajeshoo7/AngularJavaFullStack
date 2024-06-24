import { BasicAuthenticationService } from './../basic-auth-authentication.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

    constructor(
      private basicAuthenticationService:BasicAuthenticationService){
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log("Inside HTTP INTERCEPTER");

    // let username = 'user'
    // let password = 'password'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    if(basicAuthHeaderString && username){

    request = request.clone({

      setHeaders : {
        Authorization : basicAuthHeaderString
      }

    })

    }

    console.log("OUTSIDE HTTP INTERCEPTER");

    return next.handle(request);
    }

}
