import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map, switchMap, tap } from 'rxjs';
import { Pokemon } from 'src/app/core/models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/';
  public readonly countPokemons$ = new BehaviorSubject<number>(0);
  private readonly http = inject(HttpClient);
  getPokemonList({
    offset = 0,
    limit = 20,
    query = '',
  }: {
    offset?: number;
    limit?: number;
    query?: string;
  }) {
    return this.http.get<any>(`${this.baseUrl}pokemon?&limit=${limit}&offset=${offset}`).pipe(
      tap(res => this.countPokemons$.next(res.count)),
      map((data: any) => data.results),
      switchMap((res: { url: string; name: string }[]) => {
        const filterRes = res.filter(pokemon => {
          return query ? pokemon.name.slice(0, query.length) === query : pokemon;
        });
        return forkJoin(filterRes.map(({ name }) => this.getPokemonCard(name)));
      })
    );
  }

  getPokemonCard(pokemon: number | string) {
    return this.http.get<Pokemon>(`${this.baseUrl}pokemon/${pokemon}`).pipe(
      map(res => {
        return {
          ...res,
          src: `https://projectpokemon.org/images/normal-sprite/${res.name}.gif`,
        };
      })
    );
  }
}
