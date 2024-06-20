import { Component, OnInit } from '@angular/core';

import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common'; // Added



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

  todos = [
    new Todo(1,'Learn to Dance', false, new Date()),
    new Todo(2,'Get more Expert at Angular', false, new Date()),
    new Todo(3,'Expert more on Java Full Stack', false, new Date()),
    new Todo(4,'Be more Awesome', false, new Date()),
  ]


  todo={
    id: 1,
    description: 'Learn to Dance'
  }

  constructor() { }

  ngOnInit() {
  }

}
