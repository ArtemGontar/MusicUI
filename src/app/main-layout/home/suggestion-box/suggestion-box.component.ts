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
  songs: Song[];
  constructor(private sharedService: SharedService,
    private songService: SongService) {
    this.sharedService = sharedService;
    this.songService = songService;
  }

  ngOnInit() {
    this.songService.getItems().subscribe(songs => 
      this.songs = songs);
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
