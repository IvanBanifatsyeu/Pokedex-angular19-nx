import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from './components/card/card.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { PokemonListComponent } from './pokemon-list.component';
import { SearchBarComponent } from '../shared/components/search-bar/search-bar.component';
import { PaginationComponent } from '../shared/components/pagination/pagination.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PokemonListComponent, CardComponent, PokemonComponent],
  imports: [
    CommonModule,
    PokemonListRoutingModule,
    ReactiveFormsModule,
    SearchBarComponent,
    PaginationComponent,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
})
export class PokemonListModule {}
