import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonWithImg } from '../core/models/pokemon.model';
import { PokeballService } from '../core/services/pokeball.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pokeball',
  templateUrl: './pokeball.component.html',
  styleUrls: ['./pokeball.component.scss'],
  imports: [CommonModule, MatCardModule, RouterModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokeballComponent {
  private readonly pokeballService = inject(PokeballService);
  public readonly pokeball$: Observable<PokemonWithImg[]> = this.pokeballService.pokeball$;
}
