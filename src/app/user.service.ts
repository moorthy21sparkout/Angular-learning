import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private apiUrl = 'https://api.example.com/projects';
  getUser(){
    return (['ram','sam','kumar','raj'])
  }
  getProjectId(id: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
