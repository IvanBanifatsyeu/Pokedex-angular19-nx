import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PokeballComponent } from './pokeball.component'

const routes: Routes = [{ path: '', component: PokeballComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeballRoutingModule {}
