import { PokeballService } from './../../../core/services/pokeball.service'
import { Component, EventEmitter, Inject, Output } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { PokemonWithImg } from '../../../core/models/pokemon.model'

export interface DialogData {
  pokemon: PokemonWithImg
}
@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss'],
    standalone: false
})
export class PokemonComponent {
  @Output() addToPokeballEvent = new EventEmitter<PokemonWithImg>()
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private pokeballService: PokeballService
  ) {}

  addToPokeballClick() {
    this.pokeballService.addPokemon(this.data.pokemon)
  }
}
