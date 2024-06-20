import { FooterComponent } from './footer/footer.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import {MenuComponent} from "./menu/menu.component";
import { WelcomeComponent } from './welcome/welcome.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent,MenuComponent,FooterComponent,WelcomeComponent]
})
export class AppComponent {
  title = 'todo';
  message = "Welome Raj"
}
