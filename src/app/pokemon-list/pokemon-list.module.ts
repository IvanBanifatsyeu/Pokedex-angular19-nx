import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';

import { CardComponent } from './components/card/card.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { PokemonListComponent } from './pokemon-list.component';
import { SearchBarComponent } from '../shared/components/search-bar/search-bar.component';

@NgModule({
  declarations: [PokemonListComponent, CardComponent, PokemonComponent],
  imports: [
    CommonModule,
    PokemonListRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    SearchBarComponent,
  ],
})
export class PokemonListModule {}
