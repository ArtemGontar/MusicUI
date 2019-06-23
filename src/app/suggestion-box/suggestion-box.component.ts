import { Component, OnInit } from '@angular/core';
import { Song } from '../song';

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
  }
];

  constructor() { }

  ngOnInit() {
  }

  onSelectSong(event) {
    var elem = event.target.closest('.suggestion-box__item');
    console.log(elem.id);
    var currentSong = this.songs[elem.id - 1];//this.songs.find(x => x.id = parseInt(elem.id));
    document.querySelector('audio').src = currentSong.url;
  }

  onNextButtonClick() {
    var container = document.querySelector('.suggestion-box__container');
    this.sideScroll(container,'right',15,500,20);
  }

  onBackButtonClick() {
    var container = document.querySelector('.suggestion-box__container');
    this.sideScroll(container,'left',15,500,20);
  }
  // var button = document.getElementById('slide');
  // button.onclick = function () {
  //     var container = document.getElementById('container');
  //     sideScroll(container,'right',25,100,10);
  // };

  // var back = document.getElementById('slideBack');
  // back.onclick = function () {
  //     var container = document.getElementById('container');
  //     sideScroll(container,'left',25,100,10);
  // };

  sideScroll(element,direction,speed,distance,step){
      var scrollAmount = 0;
      var slideTimer = setInterval(function(){
          if(direction == 'left'){
              element.scrollLeft -= step;
          } else {
              element.scrollLeft += step;
          }
          scrollAmount += step;
          if(scrollAmount >= distance){
              window.clearInterval(slideTimer);
          }
      }, speed);
  }
}
