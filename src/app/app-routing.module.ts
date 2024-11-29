import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pokemon-list/pokemon-list.module').then(m => m.PokemonListModule),
  },

  {
    path: 'pokeball',
    loadComponent: () => import('./pokeball/pokeball.component').then(m => m.PokeballComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
