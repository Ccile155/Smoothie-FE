import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';
import { catchError, tap } from 'rxjs/operators';

export interface Smoothie { //le carton pour 1 smoothie qui sera rempli par Mongoose
  _id?: String; // Le ? indique que c'est optionnel
  title : String;
  ingredients : [
      {
        nom? : String;
        quantity? : String;
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
  recipe?:[
            {
              stepText: String;
            }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class SmoothieService {

  public static backendError = false;

  private apiUrl = environment.apiUrl;
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
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

  addSmoothie(smoothie: Smoothie) {
    const addUrl = `${this.apiUrl}/catalog/add`;
    return this.http.post<Smoothie>(addUrl, smoothie).pipe(
      catchError(this.handleError('Erreur:'))
    );
  }

  /**
  * Gestion requete Http manquées
  * pour faire que l'app ne s'arrête pas.
  * @param operation - nom de l'operation manquée
  * @param result - valeur optionnelle. Retourne un observable.
  */
 private handleError<T>( operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    // on utilise la propriete statique de la classe pour stocker le fait de l'erreur
    SmoothieService.backendError = true;
    // Ici on récupère le message venant de la réponse nodesj dans le tableau errors
    this.log(`${operation}`);
    error.error.errors.forEach(element => {
      this.log(`${element.msg}`);
    });
    // this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  /** Message de log avec MessageService */
  private log(message: string) {
    this.messageService.add(`${message}`);
  }
}

