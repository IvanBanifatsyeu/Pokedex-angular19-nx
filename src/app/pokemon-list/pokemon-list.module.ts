import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from './../shared/shared.module'

import { CardComponent } from './components/card/card.component'
import { PokemonListRoutingModule } from './pokemon-list-routing.module'
import { PokemonListComponent } from './pokemon-list.component'

@NgModule({
  declarations: [PokemonListComponent, CardComponent],
  imports: [CommonModule, PokemonListRoutingModule, SharedModule, ReactiveFormsModule],
})
export class PokemonListModule {}
