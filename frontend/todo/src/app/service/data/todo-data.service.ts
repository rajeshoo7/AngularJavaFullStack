import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private readonly API_URL = 'http://localhost:8080';


  constructor(private http: HttpClient) {}

  retrieveAllTodos(username: string) {

  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

  let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })



    return this.http.get<Todo[]>(`${this.API_URL}/users/${username}/todos`,{headers});
  }
  createBasicAuthenticationHttpHeader() {
    let username = 'user'
    let password = 'password'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }

  deleteTodo(username: string, id: number) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

  let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.delete(`${this.API_URL}/users/${username}/todos/${id}`,{headers});
  }

  retrieveTodo(username: string, id: number) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

  let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<Todo>(`${this.API_URL}/users/${username}/todos/${id}`,{headers});
  }

  updateTodo(username: string, id: number, todo: Todo) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

  let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.put(`${this.API_URL}/users/${username}/todos/${id}`, todo,{headers});
  }

  createTodo(username: string, todo: Todo) {

    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

  let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.post(`${this.API_URL}/users/${username}/todos`, todo,{headers});
  }


}
