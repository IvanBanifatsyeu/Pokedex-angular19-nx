import { SharedModule } from './../shared/shared.module'
import { MatCardModule } from '@angular/material/card'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PokemonListRoutingModule } from './pokemon-list-routing.module'
import { PokemonListComponent } from './pokemon-list.component'
import { CardComponent } from './components/card/card.component'
import { PaginationComponent } from './components/pagination/pagination.component'

@NgModule({
  declarations: [PokemonListComponent, CardComponent, PaginationComponent],
  imports: [CommonModule, PokemonListRoutingModule, SharedModule],
})
export class PokemonListModule {}
