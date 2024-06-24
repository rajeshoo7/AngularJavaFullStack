import { FooterComponent } from './footer/footer.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { MenuComponent } from "./menu/menu.component";
import { WelcomeComponent } from './welcome/welcome.component';
import { TodoComponent } from './todo/todo.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { ListTodosComponent } from './list-todos/list-todos.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'], // Corrected from 'styleUrl' to 'styleUrls'
    imports: [
        RouterOutlet,
        LoginComponent,
        MenuComponent,
        FooterComponent,
        WelcomeComponent,
        TodoComponent,
        ListTodosComponent,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpIntercepterBasicAuthService,
            multi: true
        }
    ]
})
export class AppComponent {
    title = 'todo';
    message = "Welcome Raj"
}
