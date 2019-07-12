import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Smoothie, SmoothieService } from '../smoothie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private LabelSmoothie: "<button (click)='getFiche(smoothie._id)'>{{ smoothie.title }}</button>";
  private _smoothies: Smoothie[];
  private _smoothie: Smoothie;
  private _smoothieId: string;
  private imgUrl = environment.imgUrl;

  constructor(
    private route: ActivatedRoute,
    private smoothieService: SmoothieService
  ) { }

  ngOnInit() {
    this.smoothieId = this.route.snapshot.paramMap.get('id');
    // La ligne en dessous est equivalente à la ligne au dessus
    // this.setSmoothie(this.route.snapshot.paramMap.get('id'));
    this.getSmoothieDetail();
    this.getAllSmoothies();
    console.log(this.smoothies);

  }

  set smoothieId(mSmoothieId: string) {
    this._smoothieId = mSmoothieId;
  }
  get smoothieId() {
    return this._smoothieId;
  }

  /** Notation classique des getter setter, simplifiiée par les fonctions get et set de typscript */
  // setSmoothie(mSmoothieId: string) {
  //   this._smoothieId = mSmoothieId
  // }
  // getSmoothie(): any {
  //   return this._smoothie;
  // }

  set smoothie(mSmoothie: Smoothie) {
    this._smoothie = mSmoothie;
  }
  get smoothie(){
    return this._smoothie;
  }

  getSmoothieDetail(): void {
    this.smoothieService.getOneSmoothie(this.smoothieId)
      .subscribe( (smoothieDetail) => {
      this.smoothie = smoothieDetail;
      console.log(this.smoothie);
    })
  }

  set smoothies(mSmoothies: any){
    this._smoothies = mSmoothies;
  }
  get smoothies(): any {
    return this._smoothies;
  }
  getAllSmoothies(): void {
    this.smoothieService.getSmoothies()
      .subscribe((listSmoothie) => {
        this.smoothies = listSmoothie;
        console.log(this.smoothies);
      });
  }
  
  getFiche(id: string){
    this.smoothieId = id;
    this.getSmoothieDetail();
  }

}
