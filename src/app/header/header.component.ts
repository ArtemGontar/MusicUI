import { Component, OnInit } from '@angular/core';
import { MenuElement } from '../menuElement'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuElements: MenuElement[] = [
    {
      name: "Home",
      className: "header__item__home"
    },
    {
      name: "Stream",
      className: "header__item__stream"
    },
    {
      name: "Library",
      className: "header__item__library"
    },
    {
      name: "Search",
      className: "header__item__search"
    },
    {
      name: "Bell",
      className: "header__item__bell"
    },
    {
      name: "Account",
      className: "header__item__account"
    },
    {
      name: "Mail",
      className: "header__item__mail"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
