import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PokemonListRoutingModule } from './pokemon-list-routing.module'
import { PokemonListComponent } from './pokemon-list.component'
import { CardComponent } from './components/card/card.component'

@NgModule({
  declarations: [PokemonListComponent, CardComponent],
  imports: [CommonModule, PokemonListRoutingModule],
})
export class PokemonListModule {}
