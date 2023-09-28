import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  base_url: any = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  userRegister(body: any) {
    return this.http.post(`${this.base_url}/register`, body);
  }

  userLogin(email: any, pswd: any) {
    const body = {
      email,
      pswd,
    };
    return this.http.post(`${this.base_url}/login`, body);
  }

  getUserData(email: any) {
    const body = {
      email,
    };
    return this.http.post(`${this.base_url}/get-user`, body);
  }

  editUserData(email: any, place: any, social: any, paypal: any) {
    const body = {
      email,
      place,
      social,
      paypal,
    };
    return this.http.put(`${this.base_url}/edit-user`, body);
  }

  getUserImages(email: any) {
    const body = {
      email,
    };
    return this.http.post(`${this.base_url}/get-user-images`, body);
  }

  addImage(email: any, url: any,iname:any) {
    const body = {
      email,
      url,iname
    };
    return this.http.post(`${this.base_url}/add-image`, body);
  }

  getAllImages() {
    return this.http.get(`${this.base_url}/get-all-images`);
  }
}
