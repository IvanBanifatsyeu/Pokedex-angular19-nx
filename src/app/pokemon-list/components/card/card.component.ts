import { CommonModule } from '@angular/common';
import { PokemonWithImg } from './../../../core/models/pokemon.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule, MatCardModule],
})
export class CardComponent {
  @Input() pokemon!: PokemonWithImg;
  @Output() getPokemonEvent = new EventEmitter<PokemonWithImg>();
  onGetPokemonClick() {
    this.getPokemonEvent.emit(this.pokemon);
  }
}
