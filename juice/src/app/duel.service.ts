import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DuelService {

  constructor(private http: HttpClient) { }
  // Exemple de méthode pour envoyer des données

  envoyerDonnées(userData: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', userData)
  }
}
