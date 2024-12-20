import { Routes } from '@angular/router';

export const routes: Routes = [
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
