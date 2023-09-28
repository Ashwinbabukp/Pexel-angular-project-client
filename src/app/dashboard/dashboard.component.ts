import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userData: any = {};
  loggedUser: any = '';
  allUserImages: any = [];

  editForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    place: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    social: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9_]*')]],
    paypal: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  });

  uploadForm = this.fb.group({
    url: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.getUserData();
    this.getAllImages();
  }

  getUserData() {
    this.loggedUser = localStorage.getItem('loggedUser');
    this.api.getUserData(this.loggedUser).subscribe({
      next: (res: any) => {
        console.log(res);
        this.userData = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  editUser() {
    let place = this.editForm.value.place;
    let social = this.editForm.value.social;
    let paypal = this.editForm.value.paypal;

    this.api.editUserData(this.loggedUser, place, social, paypal).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getUserData();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  uploadImg() {
    let url = this.uploadForm.value.url;
    let email = this.loggedUser;
    let iname = localStorage.getItem("loggedName")

    this.api.addImage(email, url,iname).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getAllImages() {
    this.api.getUserImages(this.loggedUser).subscribe({
      next: (res: any) => {
        this.allUserImages = res;
        console.log(this.allUserImages);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
