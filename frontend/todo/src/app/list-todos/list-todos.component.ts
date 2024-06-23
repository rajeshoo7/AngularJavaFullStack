import { Component, OnInit } from '@angular/core';

import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common'; // Added
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';



export class Todo {
      constructor(
      public id: number,
      public description: string,
      public done: boolean,
      public targetDate: Date
        ){

        }
}




@Component({
    selector: 'app-list-todos',
    templateUrl: './list-todos.component.html',
    styleUrls: ['./list-todos.component.css'],
    standalone: true, // Generated - Change
    imports: [NgIf, NgFor, UpperCasePipe, DatePipe] // Added

})
export class ListTodosComponent implements OnInit {

  todos:Todo[]=[];
  message: string='';

  // todos = [
  //   new Todo(1,'Learn to Dance', false, new Date()),
  //   new Todo(2,'Get more Expert at Angular', false, new Date()),
  //   new Todo(3,'Expert more on Java Full Stack', false, new Date()),
  //   new Todo(4,'Be more Awesome', false, new Date()),
  // ]




  constructor(private service:TodoDataService,
    private router: Router

  ) { }

  ngOnInit() {


    this.refreshTodos();

  }

  refreshTodos() {
    this.service.retrieveAllTodos('RR').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }



  deleteTodo(id:number){
    console.log(`delete Todo ${id}`)
    this.service.deleteTodo('RR',id).subscribe(
      response => {
        console.log(response);
        this.message=`Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )


  }

  updateTodo(id:number) {
    console.log(`update ${id}`)
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }


}
