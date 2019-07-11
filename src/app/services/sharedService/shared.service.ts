import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {
  @Output() fire: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  change(artistName, trackName) {
    this.fire.emit({artistName, trackName});
  }

  getEmittedValue() {
    return this.fire;
  }
}
