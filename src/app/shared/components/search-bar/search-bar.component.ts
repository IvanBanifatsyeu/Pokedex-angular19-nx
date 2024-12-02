import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  imports: [MatIconModule, MatFormFieldModule, ReactiveFormsModule, CommonModule, MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent implements OnInit {
  searchControl = new FormControl('');
  @Output() searchEvent = new EventEmitter<{ query: string }>();
  destroyRef = inject(DestroyRef);
  constructor(
    private formBuilder: FormBuilder,
  ) {}
  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(searchText => this.searchEvent.emit({ query: searchText ?? '' }));
  }
  clear() {
    this.searchControl.reset();
  }
}
