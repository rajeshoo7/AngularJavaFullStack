import { HardCodedAuthenticationService } from './../service/hard-coded-authentication.service';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { BasicAuthenticationService } from '../service/basic-auth-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router:Router,
    private hardCodedAuthenticationService: HardCodedAuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService
  ) { }

   ngOnInit() {
   }

   handleLogin() {
      // console.log(this.username);
//if(this.username==="RR" && this.password === 'RR') {
if(this.hardCodedAuthenticationService.authenticate(this.username, this.password)){
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false
      } else {
        this.invalidLogin = true
      }
   }

   handleBasicLogin() {
    // console.log(this.username);
//if(this.username==="RR" && this.password === 'RR') {
this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data =>{
            console.log(data);
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false

        }, error =>{
      console.log(error)
      this.invalidLogin = true
        }
      )

 }

}
