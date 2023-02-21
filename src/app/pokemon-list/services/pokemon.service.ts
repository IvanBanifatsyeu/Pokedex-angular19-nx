import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs'
import { PokemonList } from 'src/app/core/models/pokemonList.model'

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl = 'https://pokeapi.co/api/v2/'
  constructor(private http: HttpClient) {}
  getPokemonList(offset: number, limit = 20) {
    return this.http
      .get<PokemonList[]>(`${this.baseUrl}pokemon?&limit=${limit}`)
      .pipe(map((x: any) => x.results))
  }
  getPokemonCard(pokemon: number | string) {
    return this.http.get(`${this.baseUrl}pokemon/${pokemon}`)
  }
}
