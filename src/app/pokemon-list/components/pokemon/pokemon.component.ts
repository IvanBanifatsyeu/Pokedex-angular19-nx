import { PokeballService } from './../../../core/services/pokeball.service'
import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { PokemonWithImg } from '../../../core/models/pokemon.model'

export interface DialogData {
  pokemon: PokemonWithImg
}
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private pokeballService: PokeballService
  ) {}
  onAddToPokeballClick() {
    console.log('')
  }
}
