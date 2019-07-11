import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Smoothie { //le carton pour 1 smoothie qui sera rempli par Mongoose
  _id?: String; // Le ? indique que c'est optionnel
  title : String;
  ingredients : [
      {
        nom : String;
        quantity : String;
      }
  ];
  picture?: {
      name?: String;
      alt?: String;
      path?: String;
  };
  features?: {
      cost?: String;
      prepTime?: String;
  };
  advice?: String;
  description: String;
  recipe:[
            {
              stepText: String;
            }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class SmoothieService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
   }

  // Get all Smoothie
  getSmoothies(): Observable<Smoothie[]> {
    const smoothieListUrl = `${this.apiUrl}/catalog/liste`;
    return this.http.get<Smoothie[]>(smoothieListUrl);
  }

  getOneSmoothie(id: String): Observable<Smoothie> {
    const getUrl = `${this.apiUrl}/catalog/liste/${id}`;
    console.log(getUrl);
    return this.http.get<Smoothie>(getUrl);
  }

}
