import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) { }
  getImages(page = 1) {
    return this.http.get(`${environment.apiUrl}/?key=${environment.apiKey}&page=${page}`)
  }
  searchImages(keyword, page = 1) {
    return this.http.get(`${environment.apiUrl}/?key=${environment.apiKey}&q=${keyword}&page=${page}`)
  }
}