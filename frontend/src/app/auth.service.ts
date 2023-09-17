import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  private apiUrl ='http://localhost:3000/myTalkieTime';

  postUserData(user:any){
    return this.http.post<any>(`${this.apiUrl}/user-signup`,user);
  }

  checkLogin(email:any,password:any){
    return this.http.post(`${this.apiUrl}/login`,{email,password})
  }

}
