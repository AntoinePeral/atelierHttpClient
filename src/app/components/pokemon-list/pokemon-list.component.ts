import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  // Injection du service pokemon
  private pokemonService: PokemonService = inject(PokemonService);

  // Souscription de la liste de pokémons
  pokemonListSubscription!: Subscription;

  // Variable qui récupère la liste des pokémons
  pokemonList!: any[];

  // Récupération de toutes les cartes lors de l'initialisation + subscription à l'observable
  ngOnInit(): void {
    this.pokemonListSubscription = this.pokemonService.getPokemonsCards().subscribe(response =>{
      console.log("response.data", response.data);
      this.pokemonList = response.data;
    })
  }

  // Arreter d'écouter le subscribe de l'observable quand le composant n'est plus affiché
  ngOnDestroy(): void {
    this.pokemonListSubscription.unsubscribe()
  }


}
