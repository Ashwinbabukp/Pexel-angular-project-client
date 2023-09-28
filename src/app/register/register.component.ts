import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  regForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z@.0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
  });

  constructor(private fb: FormBuilder, private api: ApiService) {}

  register() {
    let email = this.regForm.value.email;
    let pswd = this.regForm.value.pswd;
    let uname = this.regForm.value.uname;
  

    const body = { email, pswd, uname };
    this.api.userRegister(body).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
