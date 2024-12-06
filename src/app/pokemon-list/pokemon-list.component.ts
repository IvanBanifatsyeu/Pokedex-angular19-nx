import { PokemonComponent } from './components/pokemon/pokemon.component';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { PokemonWithImg } from '../core/models/pokemon.model';
import { PokemonService } from './services/pokemon.service';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../shared/components/search-bar/search-bar.component';
import { PaginationComponent } from '../shared/components/pagination/pagination.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  imports: [
    CommonModule,
    SearchBarComponent,
    PaginationComponent,
    MatProgressSpinnerModule,
    MatCardModule,
    CardComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent implements OnInit {
  private offset = 0;
  private pokemonsPerPage = 20;
  public loading = false;
  public  pokemons!: PokemonWithImg[];
  public pokemonsCount!: Observable<number>;
  private destroyRef = inject(DestroyRef);
  private pokemonService = inject(PokemonService);
  public dialog = inject(MatDialog);
  private cdRef = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.loading = true;
    this.pokemonService
      .getPokemonList({ offset: this.offset, limit: this.pokemonsPerPage })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(pokemons => {
        this.pokemons = pokemons;
        this.loading = false;
        this.cdRef.markForCheck();
      });
    this.pokemonsCount = this.pokemonService.countPokemons$$;
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
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(pokemons => {
        this.pokemons = pokemons;
        this.loading = false;
        this.cdRef.markForCheck();
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
