import { PokeballService } from './../../../core/services/pokeball.service';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
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
})
export class PokemonComponent {
  @Output() addToPokeballEvent = new EventEmitter<PokemonWithImg>();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private pokeballService: PokeballService
  ) {}

  addToPokeballClick() {
    this.pokeballService.addPokemon(this.data.pokemon);
  }
}
