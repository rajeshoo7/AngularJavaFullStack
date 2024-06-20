import { HardCodedAuthenticationService } from './../service/hard-coded-authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor( private hardCodedAuthenticationService:HardCodedAuthenticationService){


  }

  ngOnInit() {
    this.hardCodedAuthenticationService.logout();
  }

}
