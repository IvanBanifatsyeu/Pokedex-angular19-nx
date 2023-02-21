import { Component, OnDestroy, OnInit } from '@angular/core'
import { PokemonList } from '../core/models/pokemonList.model'
import { DestroyService } from '../core/services/destroy.service'
import { PokemonService } from './services/pokemon.service'
import { takeUntil } from 'rxjs'
import { Pokemon, PokemonWithImg } from '../core/models/pokemon.model'
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  providers: [DestroyService],
})
export class PokemonListComponent implements OnInit, OnDestroy {
  private offset = 0
  pokemons!: PokemonWithImg[]
  constructor(private pokemonService: PokemonService, private destroyService: DestroyService) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemonList(this.offset)
      .pipe(takeUntil(this.destroyService.destory$$))
      .subscribe(pokemons => {
        console.log(pokemons)
        this.pokemons = pokemons
      })
  }
  ngOnDestroy() {
    this.destroyService.destroySubscriptions()
  }
}
