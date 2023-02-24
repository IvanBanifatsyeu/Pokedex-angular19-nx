import { PokemonWithImg } from './../../../core/models/pokemon.model'
import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() pokemon!: PokemonWithImg
  @Output() getPokemonEvent = new EventEmitter<PokemonWithImg>()
  onGetPokemonClick() {
    this.getPokemonEvent.emit(this.pokemon)
  }
}
