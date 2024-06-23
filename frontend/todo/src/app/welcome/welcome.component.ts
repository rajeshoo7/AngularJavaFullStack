import { HelloWorldBean, WelcomeDataService } from './../service/data/welcome-data.service';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, NgIf, HttpClientModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})

export class WelcomeComponent {
  message = 'SOME WELCOME MESSAGE';
  name = '';
  welcomeMessageFromService:string="";
  welcomeMessageFromService2:string="";

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}
  ngOnInit() {
    console.log(this.message);
    this.name = this.route.snapshot.params['name'];
  }

  //getWelcomeMessage() {
    //this.service.executeHelloWorldService();
    // console.log("get Welcome Message");
  //}
  getWelcomeMessage() {

    console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
  );
  }


  getWelcomeMessageWithParameter() {

    console.log(this.service.executeHelloWorldBeanServiceWithPathVariable(this.name));

    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse2(response),
      error => this.handleErrorResponse(error)
  );
  }

  handleSuccessfulResponse(response:HelloWorldBean){

    this.welcomeMessageFromService = response.message;



    console.log("success 1  "+response.message);
    console.log(response);
  }

  handleSuccessfulResponse2(response:HelloWorldBean){


    this.welcomeMessageFromService2 = response.message;


    console.log("success 2  "+response.message);
    console.log(response);
  }

  handleErrorResponse(error:any){

    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;

  }

}
