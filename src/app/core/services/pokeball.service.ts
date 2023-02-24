import { PokemonWithImg } from './../models/pokemon.model'
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class PokeballService {
  pokeball$ = new BehaviorSubject<PokemonWithImg[]>([])

  addPokemon(pokemon: PokemonWithImg) {
    const oldState = this.pokeball$.getValue()
    this.pokeball$.next([pokemon, ...oldState])
  }
}
