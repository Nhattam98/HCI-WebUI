import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  images: any[] = [];
  form: any = <any>{};
  page = 1;
  constructor(private imageService: ImageService) { }
  ngOnInit() {
  }
  getImages() {
    this.page++;
    this.imageService.searchImages(this.form.keyword, this.page)
      .subscribe((res: any) => {
        this.images = this.images.concat(res.hits);
      })
  }
  search(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
    this.images = [];
    this.imageService.searchImages(this.form.keyword, this.page)
      .subscribe((res: any) => {
        this.images = this.images.concat(res.hits);
      })
  }
}