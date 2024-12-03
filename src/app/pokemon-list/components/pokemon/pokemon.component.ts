import { PokeballService } from './../../../core/services/pokeball.service';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonWithImg } from '../../../core/models/pokemon.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

export interface DialogData {
  pokemon: PokemonWithImg;
}
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  imports: [MatCardModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonComponent {
  @Output() addToPokeballEvent = new EventEmitter<PokemonWithImg>();
  private pokeballService = inject(PokeballService);
  readonly data = inject(MAT_DIALOG_DATA);

  addToPokeballClick() {
    this.pokeballService.addPokemon(this.data.pokemon);
  }
}
