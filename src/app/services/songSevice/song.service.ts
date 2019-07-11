import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../../models/song';
import { environment } from '../../models/environment';


@Injectable({
  providedIn: 'root'
})
export class SongService {

  
  constructor(private http: HttpClient) { 

  }

  private URL: string = environment.WebBaseUrl;
  
  items = [];

  addSong(product) {
    this.items.push(product);
  }

  getItems() {
    return this.http.get<Song[]>(this.URL + 'api/songs');
  }
  
}
