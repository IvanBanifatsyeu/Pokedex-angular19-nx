import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonWithImg } from '../core/models/pokemon.model';
import { PokeballService } from '../core/services/pokeball.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pokeball',
  templateUrl: './pokeball.component.html',
  styleUrls: ['./pokeball.component.scss'],
  imports: [CommonModule, MatCardModule],
})
export class PokeballComponent implements OnInit {
  pokeball$!: Observable<PokemonWithImg[]>;
  constructor(private pokeballService: PokeballService) {}

  ngOnInit(): void {
    this.pokeball$ = this.pokeballService.pokeball$;
  }
}
