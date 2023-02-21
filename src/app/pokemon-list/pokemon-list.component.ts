import { Component, OnInit } from '@angular/core'
import { PokemonList } from '../core/models/pokemonList.model'
import { PokemonService } from './services/pokemon.service'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  offset = 0
  pokemons!: PokemonList[]
  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.pokemonService
      .getPokemonList(this.offset)
      .subscribe(pokemons => (this.pokemons = pokemons))
  }
}
