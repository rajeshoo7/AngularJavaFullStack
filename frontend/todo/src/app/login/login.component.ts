import { HardCodedAuthenticationService } from './../service/hard-coded-authentication.service';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = 'RR'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router:Router,
    private hardCodedAuthenticationService: HardCodedAuthenticationService
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

}
