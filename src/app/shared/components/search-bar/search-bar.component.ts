import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { debounceTime, map, Subject, switchMap } from 'rxjs'
import { PokemonService } from 'src/app/core/services/services/pokemon.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchControl = new FormControl('')

  constructor(private pokemonService: PokemonService, private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap(searchText => this.pokemonService.getPokemonList({ query: searchText ?? '' }))
      )
      .subscribe()
  }
  clear() {
    this.searchControl = this.formBuilder.control('')
  }
}
