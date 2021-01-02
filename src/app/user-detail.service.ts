import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private _http:HttpClient) { }

  userPath = 'https://gorest.co.in/public-api/users';

  getUsers(){
    return this._http.get(this.userPath);
  }

  getUserById(id:any){
    return this._http.get( `https://gorest.co.in/public-api/users/${id}`);
  }

  getUserPost(id:any){
    return this._http.get( `https://gorest.co.in/public-api/users/${id}/posts`);
  }
}
