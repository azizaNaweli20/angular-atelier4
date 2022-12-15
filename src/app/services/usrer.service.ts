import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Utilisateur } from '../core/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UsrerService {
  urlUsers ="http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  getUsers():Observable<Utilisateur[]>{
    //return this.list
    return this.http.get<Utilisateur[]>(this.urlUsers);
  }
}
