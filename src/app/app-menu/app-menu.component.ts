import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {
  
  private _title: string; //meilleure syntaxe
  constructor() { }

  ngOnInit() {
    this.title = 'Smealthie, des smoothies healthy';
  }

  set title(mTitle: string){
    this._title = mTitle;
  }
  get title(): string {
    return this._title;
  }

}
