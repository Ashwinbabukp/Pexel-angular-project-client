import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  allImages: any = [];
  userData: any = {};

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllImages().subscribe({
      next: (res: any) => {
        this.allImages=res
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
