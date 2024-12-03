import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  imports: [MatPaginatorModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() length!: number | null;
  @Output() pokemonsCountRequest = new EventEmitter<{ pageIndex: number; pageSize: number }>();

  public pageSize = 20;
  public pageSizeOptions = [5, 10, 20];
  public pageIndex = 0;

  public hidePageSize = false;
  public showPageSizeOptions = true;
  public showFirstLastButtons = true;
  public disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pokemonsCountRequest.emit({ pageSize: e.pageSize, pageIndex: e.pageIndex });
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}
