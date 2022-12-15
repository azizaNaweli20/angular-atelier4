import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../core/Utilisateur';
import { CalculService } from '../services/calcul.service';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUsers ! :Utilisateur[];
  alertestock !:number;
  constructor(private serviceCal :CalculService , private todoservice:TodoService) { }

  ngOnInit(): void {


    this.listUsers=[
      {id: 1, name: "Leanne Graham", username: "Bret", email:
      "Sincere@april.biz"},
      {id: 2, name: "Ervin Howell", username: "Bret", email:
      "Shanna@melissa.tv"},
      {id: 3, name: "Clementine Bauch", username: "Samantha", email:
      "Nathan@yesenia.net"}
      ]
  }
 
  verifier(){
    this.alertestock=this.serviceCal.getNumberOf(this.listUsers,'quantity',0)
  }

}
