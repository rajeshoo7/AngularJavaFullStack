import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../list-todos/list-todos.component';
import { FormsModule } from '@angular/forms';
import { NgIf, DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpIntercepterBasicAuthService } from '..//service/http/http-intercepter-basic-auth.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    standalone: true,
    imports: [NgIf, FormsModule, DatePipe],
    providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercepterBasicAuthService,
      multi: true

    }]
})
export class TodoComponent implements OnInit {

  id: number = 0;
  todo: Todo = new Todo(this.id, '', false, new Date());

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }





  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService.retrieveTodo('RR', this.id)
        .subscribe(
          data => this.todo = data
        )
    }
  }

  saveTodo() {
    if (this.id == -1) { //=== ==
      this.todoService.createTodo('RR', this.todo)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todos'])
          }
        )
    } else {
      this.todoService.updateTodo('RR', this.id, this.todo)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todos'])
          }
        )
    }
  }

}
