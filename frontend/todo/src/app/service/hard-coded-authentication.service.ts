import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string){
   // console.log('before ' + this.isUserLoggedIn())
if(username === "RR" && password==='RR')
  {
    sessionStorage.setItem('authenticaterUser',username)
  //  console.log('After  ' + this.isUserLoggedIn())
    return true;

  }
  return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }


}
