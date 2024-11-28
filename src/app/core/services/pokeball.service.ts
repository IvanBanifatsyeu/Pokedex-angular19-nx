import { PokemonWithImg } from './../models/pokemon.model'
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class PokeballService {
  pokeball$ = new BehaviorSubject<PokemonWithImg[]>(
    JSON.parse(localStorage.getItem('pokeball') || '[]')
  )

  addPokemon(pokemon: PokemonWithImg) {
    const oldState = this.pokeball$.getValue()
    const isAddable = !this.pokeball$.getValue().find(poke => poke.id === pokemon.id)
    if (isAddable) {
      localStorage.setItem('pokeball', JSON.stringify([pokemon, ...oldState]))
      this.pokeball$.next([pokemon, ...oldState])
    }
  }
}
