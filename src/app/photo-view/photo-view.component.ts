import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.css']
})
export class PhotoViewComponent implements OnInit {
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
