import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PokeballRoutingModule } from './pokeball-routing.module'
import { PokeballComponent } from './pokeball.component'
import { CoreModule } from '../core/core.module'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [PokeballComponent],
  imports: [CommonModule, PokeballRoutingModule, CoreModule, SharedModule],
})
export class PokeballModule {}
