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
  
  items = [
    {
      id: 1,
      albumName: '1',
      artistName: 'Billie Eilish',
      artwork: '/assets/img/billie-eilish.jpg',
      durationInMillis: 10,
      genreNames: '1',
      name: 'Bad Guy',
      url: '/assets/music/Billie Eilish - Bad Guy.mp3',
      releaseDate: new Date('2018-10-10')
    },
    {
      id: 2,
      albumName: '2',
      artistName: 'Бутырка',
      artwork: '/assets/img/butyrka.jpg',
      durationInMillis: 10,
      genreNames: '2',
      name: 'Запахло Весной',
      url: '/assets/music/Бутырка - Запахло Весной.mp3',
      releaseDate: new Date('2018-10-10')
    },
    {
      id: 3,
      albumName: '3',
      artistName: 'Руки вверх',
      artwork: '/assets/img/ruki-vverh.jpg',
      durationInMillis: 10,
      genreNames: '3',
      name: 'К Черту Эту Гордость',
      url: '/assets/music/Руки Вверх - К Черту Эту Гордость.mp3',
      releaseDate: new Date('2018-10-10')
    },
    {
      id: 4,
      albumName: '4',
      artistName: 'Макс Корж',
      artwork: '/assets/img/maks-korzh.jpg',
      durationInMillis: 10,
      genreNames: '4',
      name: 'Шантаж',
      url: '/assets/music/Макс Корж - Шантаж.mp3',
      releaseDate: new Date('2018-10-10')
    },
    {
      id: 5,
      albumName: '5',
      artistName: 'Баста',
      artwork: '/assets/img/basta.jpg',
      durationInMillis: 10,
      genreNames: '5',
      name: 'Моя Игра',
      url: '/assets/music/Баста - Моя Игра.mp3',
      releaseDate: new Date('2018-10-10')
    },
    {
      id: 6,
      albumName: '6',
      artistName: '1 kla$',
      artwork: '/assets/img/1_klass.jpg',
      durationInMillis: 10,
      genreNames: '6',
      name: 'На все сто',
      url: '/assets/music/1_klas.mp3',
      releaseDate: new Date('2018-10-10')
    }
  ];

  addSong(product) {
    this.items.push(product);
  }

  getItems() {
    return this.http.get<Song[]>(this.URL + 'api/songs');
  }
  
}
