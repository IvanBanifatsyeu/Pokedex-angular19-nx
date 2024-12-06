import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
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
export class PokeballComponent implements OnInit {
  public pokeball$!: Observable<PokemonWithImg[]>;
  private pokeballService = inject(PokeballService);

  ngOnInit(): void {
    this.pokeball$ = this.pokeballService.pokeball$;
  }
}
