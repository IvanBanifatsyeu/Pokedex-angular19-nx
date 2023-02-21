import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Component } from '@angular/core'
import { map, Observable, shareReplay } from 'rxjs'

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  /* to react to different viewport sizes */
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset]).pipe(
    /* to take the result of the match of the breakpointchange, cause we don't need other info except matches */
    /* so we can use conditional logic in the template  */
    map(result => result.matches),
    /* we use shareReplay, because we will subscribe on the observable in the template several times */
    /* throuhght async pipe, so to make sure they all listen to the same the most recent value of the observable  */

    shareReplay()
  )
  constructor(private breakpointObserver: BreakpointObserver) {}
}
