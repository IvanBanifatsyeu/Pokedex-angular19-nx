import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonWithImg } from '../core/models/pokemon.model';
import { PokeballService } from '../core/services/pokeball.service';

@Component({
  selector: 'app-pokeball',
  templateUrl: './pokeball.component.html',
  styleUrls: ['./pokeball.component.scss'],
  standalone: false,
})
export class PokeballComponent implements OnInit {
  pokeball$!: Observable<PokemonWithImg[]>;
  constructor(private pokeballService: PokeballService) {}

  ngOnInit(): void {
    this.pokeball$ = this.pokeballService.pokeball$;
  }
}
