import { Component, OnInit} from '@angular/core';
import { SuggestionBoxComponent } from '../suggestion-box/suggestion-box.component';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  myTrack;
  playButton;
  muteButton;
  likeButton;
  duration;
  currentTime;
  updateTime;
  trackName;

  isLiked: boolean;

  barSize: number;
  bar;
  progressBar;

  sharedService: SharedService;
  onMain: Boolean;
  subscription;

  constructor(sharedService: SharedService) {
    this.onMain = false;
    this.sharedService = sharedService;
   }

  ngOnInit() {
    this.subscription = this.sharedService.getEmittedValue()
    .subscribe(item => {
      this.changeTrack(item);
    });
    this.myTrack = document.getElementById('AudioSong');
    this.playButton = document.querySelector('.player__buttons__play img');
    this.muteButton = document.querySelector('.player__buttons-ext__mute img');
    this.likeButton = document.querySelector('.player__buttons-ext__like img');
    this.duration = document.querySelector('.player__full-time');
    this.currentTime = document.querySelector('.player__current-time');
    this.trackName = document.querySelector('.player__track-name');
    this.isLiked = false;
    this.barSize = 900;
    this.bar = document.querySelector('.player__default-bar');
    this.progressBar = document.querySelector('.player__progress-bar');
  }

  changeTrack(item) {
    this.setDuration();
    this.trackName.innerText = item.artistName + ' - ' + item.trackName;
    this.playOrPause();
  }

  setDuration() {
    this.myTrack.onloadedmetadata = () => {
      console.log(this.myTrack.duration);
      this.duration.innerHTML = this.timeConvert(this.myTrack.duration);
    };
  }

  playOrPause() {
    if (!this.myTrack.paused && !this.myTrack.ended){
      this.playButton.src = `data:image/svg+xml,%3Csvg width='34' height='34' viewBox='0 0 69 70' fill='none'
       xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M34.7499 0.455078C15.8899 0.455078 0.583252 16.0106 0.583252 35.1773C0.583252
        54.344 15.8899 69.8995 34.7499 69.8995C53.6099 69.8995 68.9166 54.344 68.9166 35.1773C68.9166 16.0106 53.6099 0.455078 34.7499
        0.455078ZM27.9166 50.8023V19.5523L48.4166 35.1773L27.9166 50.8023Z' fill='%238651CA'/%3E%3C/svg%3E%0A`;
      this.myTrack.pause();
      window.clearInterval(this.updateTime);
    }
    else {
      this.myTrack.play();
      this.playButton.src = `data:image/svg+xml,%3Csvg width='34' height='34' viewBox='0 0 68 68' fill='none'
       xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M34 0C15.232 0 0 15.232 0 34C0 52.768 15.232 68 34 68C52.768 68 68 52.768 68
       34C68 15.232 52.768 0 34 0ZM30.6 47.6H23.8V20.4H30.6V47.6ZM44.2 47.6H37.4V20.4H44.2V47.6Z' fill='%23B951CA'/%3E%3C/svg%3E `;
      this.updateTime = setInterval(() => this.update(), 500) 
    }
  }

  muteOrUnmute() {
    if(this.myTrack.muted){
      this.myTrack.muted = false;
      this.muteButton.src = `data:image/svg+xml,%3Csvg width='20' height='22' viewBox='0 0 50 49' fill='none' 
      xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 16.1192V32.8808H11.1111L25 46.8489V2.15108L11.1111 16.1192H0ZM37.5
       24.5C37.5 19.5553 34.6667 15.309 30.5556 13.2417V35.7303C34.6667 33.691 37.5 29.4447 37.5 24.5ZM30.5556 0V5.75485C38.5833
        8.15735 44.4444 15.6442 44.4444 24.5C44.4444 33.3558 38.5833 40.8426 30.5556 43.2451V49C41.6944 46.4578 50 36.4567 50
         24.5C50 12.5433 41.6944 2.54219 30.5556 0Z' fill='%238651CA'/%3E%3C/svg%3E `;
    }
    else {
      this.myTrack.muted = true;
      this.muteButton.src = `data:image/svg+xml,%3Csvg width='20' height='22' viewBox='0 0 22 44' fill='none' 
      xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 13.656V30.0432H9.77778L22 43.6992V0L9.77778 13.656H0Z'
       fill='%238651CA'/%3E%3C/svg%3E `;
    }
  }

  likeOrUnlike() {
    //TODO: isLiked is fake now
    if(!this.isLiked){
      this.isLiked = true;
      this.likeButton.src = `data:image/svg+xml,%3Csvg width='20' height='22' viewBox='0 0 32 30' fill='none' 
      xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.9043 5.29957C17.1959 2.18022 20.1463 0.000652127 23.5781 0.000652127C28.2009 
      0.000652127 31.5302 4.03043 31.9488 8.83304C31.9488 8.83304 32.1747 10.0252 31.6774 12.1715C31.0003 15.0946 29.4086 17.6915 27.2626 
      19.6735L15.9043 30L4.73738 19.6728C2.59141 17.6915 0.999701 15.0939 0.322568 12.1709C-0.174722 10.0246 0.0512024 8.83239 0.0512024 
      8.83239C0.469771 4.02978 3.79912 0 8.42193 0C11.8543 0 14.6128 2.18022 15.9043 5.29957Z' fill='%238855DC'/%3E%3C/svg%3E `;
    }
    else {
      this.isLiked = false;
      this.likeButton.src = `data:image/svg+xml,%3Csvg width='20' height='22' viewBox='0 0 47 45' fill='none' 
      xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M45.9256 13.524C45.2688 6.2664 40.1514 1.00087 33.7472 1.00087C29.4805 1.00087 25.5739
       3.30568 23.3757 6.99963C21.1974 3.2579 17.4509 1 13.2527 1C6.8493 1 1.73109 6.26553 1.07509 13.5231C1.02316 13.8437 0.810264 15.5308
       1.45761 18.2822C2.39056 22.2506 4.5455 25.8603 7.68791 28.7185L23.3653 43L39.3119 28.7194C42.4543 25.8603 44.6093 22.2515 45.5422
       18.2822C46.1896 15.5317 45.9767 13.8446 45.9256 13.524ZM43.8572 17.8843C43.0056 21.5087 41.0316 24.8109 38.154 27.4276L23.3757
       40.663L8.85106 27.431C5.96828 24.8091 3.99508 21.5078 3.14262 17.8834C2.52989 15.2797 2.78173 13.8089 2.7826 13.7994L2.79558
       13.7116C3.35812 7.35321 7.75541 2.73751 13.2527 2.73751C17.309 2.73751 20.8798 5.23953 22.5743 9.26621L23.3714 11.1627L24.1685
       9.26621C25.8362 5.30121 29.5956 2.73838 33.748 2.73838C39.2444 2.73838 43.6426 7.35408 44.2164 13.795C44.2181 13.8089 44.47 15.2806
        43.8572 17.8843Z' fill='%238651CA' stroke='%238651CA' stroke-width='2'/%3E%3C/svg%3E `;
    }
  }

  update() {
    if (!this.myTrack.ended)
    {
      this.currentTime.innerHTML = this.timeConvert(this.myTrack.currentTime);
      const size: number = parseInt(this.myTrack.currentTime) * this.barSize/parseInt(this.myTrack.duration);
      this.progressBar.style.width = size + 'px';
    }
    else {
      this.currentTime.innerHTML = '00:00';
      this.playButton.style.backgroundImage = 'url();';
      this.progressBar.style.width = '0';
      window.clearInterval(this.updateTime);
    }
  }

  clickedBar(event: any) {
    if (!this.myTrack.ended) {
      const mouseX = event.pageX - this.bar.offsetLeft;
      const newTime = mouseX * this.myTrack.duration / this.barSize;
      this.myTrack.currentTime = newTime;
      this.progressBar.style.width = mouseX + 'px';
      this.update();
    }
  }

  timeConvert(time)
  {
    const minutes: number = Math.floor(parseInt(time) / 60);
    const seconds: number = Math.floor(parseInt(time) % 60);

    return this.pad(minutes) + ':' + this.pad(seconds);
  }

  pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }
}
