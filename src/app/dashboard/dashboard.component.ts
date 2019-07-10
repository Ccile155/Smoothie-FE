    import { Component, Input, OnInit } from '@angular/core';
    
// decorator qui permet de créer une balise du nom du sélecteur, pour importer le composant
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() smoothie;

  // private _title: string; //meilleure syntaxe
  subTitle: String; //Autre syntaxe

  constructor() { } //class automatique qui s'execute lorsque la class exportée est instancié

  ngOnInit() { //interface implémentée redéfinie dans la classe exportée. C'est un life-cycle hook
    // this.title = 'Smealthie, des smoothies healthy !';
    this.setSubTitle();
  }

  // set title(mTitle: string){
  //   this._title = mTitle;
  // }
  // get title(): string {
  //   return this._title;
  // }

  // Autre syntaxe
  setSubTitle(): void { //void est le type de retour (any, void, string, ' ')
    this.subTitle = 'Les mots "pressé" et "bien-être" ne se sont jamais aussi bien accordés...' ;
  }

  // vibre(): void {
  //   this.
  // }

}

