import { Component, OnInit } from '@angular/core';
import { SmoothieService, Smoothie } from '../smoothie.service';
import { NavigationExtras, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-smoothie',
  templateUrl: './smoothie.component.html',
  styleUrls: ['./smoothie.component.css']
})
export class SmoothieComponent implements OnInit {

  private _smoothies: Smoothie[];
  private imgUrl = environment.imgUrl;

  constructor(
    private smoothieService: SmoothieService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getAllSmoothies();
    // this.getDetail();
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
  
  getDetail(smoothieId: string){
    this.router.navigate(['details'],{
      queryParams: {'smoothieId': smoothieId}
    } as NavigationExtras);
  }



}
