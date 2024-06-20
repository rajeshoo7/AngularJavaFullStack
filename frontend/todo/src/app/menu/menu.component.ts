import { NgIf } from '@angular/common';
import { HardCodedAuthenticationService } from './../service/hard-coded-authentication.service';
import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule,NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

 // isUserLoggedIn:boolean = false;

  constructor(public hardCodedAuthenticationService:HardCodedAuthenticationService){

  }

ngOnInit() {
   //this.isUserLoggedIn =  this.hardCodedAuthenticationService.isUserLoggedIn();

}

}
