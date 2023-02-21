import { PokemonWithImg } from './../../../core/models/pokemon.model'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() pokemon!: PokemonWithImg
}
