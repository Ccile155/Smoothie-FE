import { Component, Input, OnInit } from '@angular/core';
import { SmoothieService, Smoothie } from '../smoothie.service';
import { environment } from 'src/environments/environment';
    
// decorator qui permet de créer une balise du nom du sélecteur, pour importer le composant
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() smoothie;

  private _smoothies: Smoothie[]; //Bonne syntaxe pour déclarer un truc à setter et getter
  private apiUrl = environment.apiUrl;
  private imgUrl = environment.imgUrl;
  subTitle: String; //Autre syntaxe

  //constructor = class automatique qui s'execute lorsque la class exportée est instancié
  constructor(
    private smoothieService: SmoothieService
  ) { } 

  ngOnInit() { //interface implémentée redéfinie dans la classe exportée. C'est un life-cycle hook
    this.setSubTitle();
    // this.getAllSmoothies();
  }

  // getAllSmoothies(): void {
  //   this.smoothieService.getSmoothies()
  //     .subscribe((listSmoothie) => {
  //       this.smoothiesName = listSmoothie.title;
  //       console.log(this.smoothiesName);
  //     });
  // }

    // Autre syntaxe
    setSubTitle(): void { //void est le type de retour (any, void, string, ' ')
    this.subTitle = 'Être "pressé" et "bien-être" ne se sont jamais aussi bien accordés...' ;
  }


  // vibre(): void {
  //   this.
  // }

}

