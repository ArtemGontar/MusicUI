import { Component, OnInit } from '@angular/core';
import { Song } from '../../../models/song';
import { SharedService } from '../../../services/sharedService/shared.service';

@Component({
  selector: 'app-suggestion-box',
  templateUrl: './suggestion-box.component.html',
  styleUrls: ['./suggestion-box.component.scss']
})

export class SuggestionBoxComponent implements OnInit {
  songs: Song[] = [{
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

  sharedService: SharedService;

  constructor(sharedService: SharedService) {
    this.sharedService = sharedService;
  }

  ngOnInit() {
  }

  onSelectSong(event) {
    const elem = event.target.closest('.suggestion-box__item');
    const currentSong = this.songs[elem.id - 1];
    document.querySelector('audio').src = currentSong.url;
    this.sharedService.change(currentSong.artistName, currentSong.name);
  }

  onNextButtonClick() {
    const container = document.querySelector('.suggestion-box__container__buttons');
    this.sideScroll(container, 'right', 15, 500, 20);
  }

  onBackButtonClick() {
    const container = document.querySelector('.suggestion-box__container__buttons');
    this.sideScroll(container,'left',15,500,20);
  }

  sideScroll(element,direction,speed,distance,step){
      let scrollAmount = 0;
      const next: HTMLElement = document.querySelector('.suggestion-box__button__next');
      const back: HTMLElement = document.querySelector('.suggestion-box__button__back');
      const slideTimer = setInterval(() => {
          if(direction === 'left'){
              element.scrollLeft -= step;
          } else {
              element.scrollLeft += step;
          }
          scrollAmount += step;

          if (element.scrollLeft === 0) {
            back.style.display = 'none';
          }
          else {
            back.style.display = 'block';
          }

          if(scrollAmount >= distance) {
              window.clearInterval(slideTimer);
          }
      }, speed);
  }
}
