import { Component, OnDestroy, OnInit } from '@angular/core'
import { PokemonList } from '../core/models/pokemonList.model'
import { DestroyService } from '../core/services/destroy.service'
import { PokemonService } from '../core/services/services/pokemon.service'
import { Observable, takeUntil } from 'rxjs'
import { Pokemon, PokemonWithImg } from '../core/models/pokemon.model'
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  providers: [DestroyService],
})
export class PokemonListComponent implements OnInit, OnDestroy {
  private offset = 0
  private pokemonsPerPage = 20
  pokemons!: PokemonWithImg[]
  pokemonsCount!: Observable<number>
  constructor(private pokemonService: PokemonService, private destroyService: DestroyService) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemonList({ offset: this.offset, limit: this.pokemonsPerPage })
      .pipe(takeUntil(this.destroyService.destory$$))
      .subscribe(pokemons => {
        this.pokemons = pokemons
      })
    this.pokemonsCount = this.pokemonService.countPokemons$$
  }
  ngOnDestroy() {
    this.destroyService.destroySubscriptions()
  }
  getPokemons(data: { pageSize?: number; pageIndex?: number; query?: string }) {
    const newPokemonsPerPage = data?.pageSize ?? this.pokemonsPerPage
    const newOffsetIndex = data?.pageIndex ?? this.offset
    const newOffset = newOffsetIndex * newPokemonsPerPage
    this.offset = newOffset
    this.pokemonsPerPage = newPokemonsPerPage
    this.pokemonService
      .getPokemonList({ offset: newOffset, limit: newPokemonsPerPage })
      .pipe(takeUntil(this.destroyService.destory$$))
      .subscribe(pokemons => {
        this.pokemons = pokemons
      })
  }
}
