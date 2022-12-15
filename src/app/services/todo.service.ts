import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { todo } from '../core/model/todo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor(private http:HttpClient) { }
  urlTodos ="https://jsonplaceholder.typicode.com/todos";
  

  getTodos():Observable<todo[]>{
    
    return this.http.get<todo[]>(this.urlTodos);
  }


  getTodosUser(userId:Number):Observable<todo[]>{
    
    https://jsonplaceholder.typicode.com/todos?userId=1
    return this.http.get<todo[]>(this.urlTodos+"?userId="+userId);
  }
}
