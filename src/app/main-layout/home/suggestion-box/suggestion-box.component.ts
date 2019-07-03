import { Component, OnInit } from '@angular/core';
import { Song } from '../../../models/song';
import { SharedService } from '../../../services/sharedService/shared.service';
import { SongService } from '../../../services/songSevice/song.service';

@Component({
  selector: 'app-suggestion-box',
  templateUrl: './suggestion-box.component.html',
  styleUrls: ['./suggestion-box.component.scss']
})

export class SuggestionBoxComponent implements OnInit {
  songs: Song[] = [
    {
      id: 1,
      albumName: '1',
      artistName: 'Billie Eilish',
      artwork: {
        url: '/assets/img/billie-eilish.jpg',
        bgColor: '/assets/img/billie-eilish.jpg',
        height: 0,
        textColor: "",
        width: 0,
        id: 1,
        href: "f"
      },
      durationInMillis: 10,
      genreNames: ["1"],
      name: 'Bad Guy',
      url: '/assets/music/Billie Eilish - Bad Guy.mp3',
      releaseDate: new Date('2018-10-10'),
      trackNumber: 1,
      type: "f",
      href: "f"
    },
    {
      id: 2,
      albumName: '2',
      artistName: 'Бутырка',
      artwork: {
        url: '/assets/img/butyrka.jpg',
        bgColor: '/assets/img/butyrka.jpg',
        height: 0,
        textColor: "",
        width: 0,
        id: 1,
        href: "f"
      },
      durationInMillis: 10,
      genreNames: ["2"],
      name: 'Запахло Весной',
      url: '/assets/music/Бутырка - Запахло Весной.mp3',
      releaseDate: new Date('2018-10-10'),
      trackNumber: 1,
      type: "f",
      href: "f"
    },
    {
      id: 3,
      albumName: '3',
      artistName: 'Руки вверх',
      artwork: {
        url: '/assets/img/ruki-vverh.jpg',
        bgColor: '/assets/img/ruki-vverh.jpg',
        height: 0,
        textColor: "",
        width: 0,
        id: 1,
        href: "f"
      },
      durationInMillis: 10,
      genreNames: ["3"],
      name: 'К Черту Эту Гордость',
      url: '/assets/music/Руки Вверх - К Черту Эту Гордость.mp3',
      releaseDate: new Date('2018-10-10'),
      trackNumber: 1,
      type: "f",
      href: "f"
    },
    {
      id: 4,
      albumName: '4',
      artistName: 'Макс Корж',
      artwork: {
        url: '/assets/img/maks-korzh.jpg',
        bgColor: '/assets/img/maks-korzh.jpg',
        height: 0,
        width: 0,
        textColor: "",
        id: 1,
        href: "f"
      },
      durationInMillis: 10,
      genreNames: ["4"],
      name: 'Шантаж',
      url: '/assets/music/Макс Корж - Шантаж.mp3',
      releaseDate: new Date('2018-10-10'),
      trackNumber: 1,
      type: "f",
      href: "f"
    },
    {
      id: 5,
      albumName: '5',
      artistName: 'Баста',
      artwork: {
        url: '/assets/img/basta.jpg',
        bgColor: '/assets/img/basta.jpg',
        height: 0,
        width: 0,
        textColor: "",
        id: 1,
        href: "f"
      },
      durationInMillis: 10,
      genreNames: ["5"],
      name: 'Моя Игра',
      url: '/assets/music/Баста - Моя Игра.mp3',
      releaseDate: new Date('2018-10-10'),
      trackNumber: 1,
      type: "f",
      href: "f"
    },
    {
      id: 6,
      albumName: '6',
      artistName: '1 kla$',
      artwork: {
        url: '/assets/img/1_klass.jpg',
        bgColor: '/assets/img/1_klass.jpg',
        height: 0,
        width: 0,
        textColor: "",
        id: 1,
        href: "f"
      },
      durationInMillis: 10,
      genreNames: ["6"],
      name: 'На все сто',
      url: '/assets/music/1_klas.mp3',
      releaseDate: new Date('2018-10-10'),
      trackNumber: 1,
      type: "f",
      href: "f"
    }
  ];;
  constructor(private sharedService: SharedService,
    private songService: SongService) {
    this.sharedService = sharedService;
    this.songService = songService;
  }

  ngOnInit() {
    this.songService.getItems().subscribe(songs => 
      {
        this.songs = songs
      });
    
  }

  onSelectSong(event) {
    debugger;
    const elem = event.target.closest('.suggestion-box__item');
    const currentSong = this.songs.find(x => x.id === elem.id);
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
