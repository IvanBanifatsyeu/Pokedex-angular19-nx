import { PokemonComponent } from './components/pokemon/pokemon.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DestroyService } from '../core/services/destroy.service';

import { Observable, takeUntil } from 'rxjs';
import { PokemonWithImg } from '../core/models/pokemon.model';
import { PokemonService } from './services/pokemon.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  providers: [DestroyService],
  standalone: false,
})
export class PokemonListComponent implements OnInit, OnDestroy {
  private offset = 0;
  private pokemonsPerPage = 20;
  loading = false;
  pokemons!: PokemonWithImg[];
  pokemonsCount!: Observable<number>;
  constructor(
    private pokemonService: PokemonService,
    private destroyService: DestroyService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.pokemonService
      .getPokemonList({ offset: this.offset, limit: this.pokemonsPerPage })
      .pipe(takeUntil(this.destroyService.destory$$))
      .subscribe(pokemons => {
        this.pokemons = pokemons;
        this.loading = false;
      });
    this.pokemonsCount = this.pokemonService.countPokemons$$;
  }
  ngOnDestroy() {
    this.destroyService.destroySubscriptions();
  }
  getPokemons(data: { pageSize?: number; pageIndex?: number; query?: string }) {
    this.loading = true;
    const newQuery = data.query ?? '';
    const newPokemonsPerPage = data?.pageSize ?? this.pokemonsPerPage;
    const newOffsetIndex = data?.pageIndex ?? Math.floor(this.offset / newPokemonsPerPage);
    const newOffset = newOffsetIndex * newPokemonsPerPage;
    this.offset = newOffset;
    this.pokemonsPerPage = newPokemonsPerPage;
    this.pokemonService
      .getPokemonList({ offset: newOffset, limit: newPokemonsPerPage, query: newQuery })
      .pipe(takeUntil(this.destroyService.destory$$))
      .subscribe(pokemons => {
        this.pokemons = pokemons;
        this.loading = false;
      });
  }
  openDialog(pokemon: PokemonWithImg) {
    /* this.pokemonService.getPokemonCard() */
    this.dialog.open(PokemonComponent, {
      data: {
        pokemon,
      },
    });
  }
}
