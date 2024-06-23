import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username:string){

    console.log("Execute Hello World Bean Service");

    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);

    }

    deleteTodo(username:string,id:number){
      console.log("Delete todo: ", id);
      return this.http.delete(`http://locahost:8080/users/${username}/todos/${id}`);
    }


}
