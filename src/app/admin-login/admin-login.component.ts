import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  adminloginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z@.0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  });

  constructor(
    private fb: FormBuilder,
  ) {}


}
