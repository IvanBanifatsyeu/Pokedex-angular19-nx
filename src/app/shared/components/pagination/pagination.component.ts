import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  imports: [MatPaginatorModule],
})
export class PaginationComponent {
  @Input() length!: number | null;
  @Output() pokemonsCountRequest = new EventEmitter<{ pageIndex: number; pageSize: number }>();

  pageSize = 20;
  pageSizeOptions = [5, 10, 20];
  pageIndex = 0;

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pokemonsCountRequest.emit({ pageSize: e.pageSize, pageIndex: e.pageIndex });
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}
