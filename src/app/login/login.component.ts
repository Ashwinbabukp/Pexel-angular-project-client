import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z@.0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  });

  constructor(private fb: FormBuilder, private api: ApiService,private router:Router) {}

  login() {
    let email = this.loginForm.value.email;
    let pswd = this.loginForm.value.pswd;

  
    this.api.userLogin(email,pswd).subscribe({
      next: (res: any) => {
        console.log(res.email);
        localStorage.setItem("loggedUser",res.email)
        localStorage.setItem("loggedName",res.uname)
        this.router.navigateByUrl("/dashboard")
      },
      error: (err: any) => {
        console.log(err);
        alert(err.error)
      },
    });
  }
}
