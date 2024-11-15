import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // Injection du HttpClient
  private http: HttpClient = inject(HttpClient)

  // Initialisation de l'URL 
  private baseUrl = 'https://api.pokemontcg.io/v2/cards';

  constructor() { }

  // Methode pour récupérer l'ensemble des cartes pokémons
  getPokemonsCards():Observable<any>{
    return this.http.get(this.baseUrl);
  }

}
