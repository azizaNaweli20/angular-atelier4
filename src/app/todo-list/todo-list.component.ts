import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { todo } from '../core/model/todo';

import { CalculService } from '../services/calcul.service';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
 listTodo!: todo[];
 count!:number;
  constructor(private serviceCal:CalculService, private todoservice :TodoService) { }

  ngOnInit(): void {

    this.todoservice.getTodos().subscribe(
      data  => {this.listTodo = data;  console.log(data)},
      error => {alert("Impossible récupérer liste Todos") }
      );
      




    this.listTodo=[
     
        {"userId": 1, "id": 1, "title": "delectus aut autem", "completed":
        false},
        {"userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false},
        {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed":
        false},
        {"userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab",
        "completed": true}
      ];

    }
    billan(){
      this.count=this.serviceCal.getNumberOf(this.listTodo, 'completed',true);

    }}
