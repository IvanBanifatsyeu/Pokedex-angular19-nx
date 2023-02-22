import { Component } from '@angular/core'
import { PageEvent } from '@angular/material/paginator'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  length = 50
  pageSize = 20
  pageIndex = 0

  hidePageSize = false
  showPageSizeOptions = true
  showFirstLastButtons = true
  disabled = false

  pageEvent!: PageEvent

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e
    this.length = e.length
    this.pageSize = e.pageSize
    this.pageIndex = e.pageIndex
  }
}
