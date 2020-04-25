import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  images: any[] = [];
  page = 1;
  constructor(private imageService: ImageService) { }
  ngOnInit() {
    this.getImages();
  }
  getImages() {
    this.page++;
    this.imageService.getImages(this.page)
      .subscribe((res: any) => {
        this.images = this.images.concat(res.hits);
      })
  }
}