import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import { debounceTime, takeUntil, tap } from 'rxjs'
import { DestroyService } from './../../../core/services/destroy.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [DestroyService],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  searchControl = new FormControl('')
  @Output() searchEvent = new EventEmitter<{ query: string }>()
  constructor(private formBuilder: FormBuilder, private destroyService: DestroyService) {}
  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),
        tap(searchText => this.searchEvent.emit({ query: searchText ?? '' })),
        takeUntil(this.destroyService.destory$$)
      )
      .subscribe()
  }
  clear() {
    this.searchControl = this.formBuilder.control('')
  }
  ngOnDestroy() {
    this.destroyService.destroySubscriptions()
  }
}
