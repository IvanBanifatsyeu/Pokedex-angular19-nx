import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pokemon-list/pokemon-list.component').then(m => m.PokemonListComponent),
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
