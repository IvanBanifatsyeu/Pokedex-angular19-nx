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
  public readonly pageSizeOptions = [5, 10, 20];
  public pageIndex = 0;
  public readonly showPageSizeOptions = true;

  handlePageEvent(e: PageEvent) {
    this.pokemonsCountRequest.emit({ pageSize: e.pageSize, pageIndex: e.pageIndex });
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}
