import { Component } from '@angular/core';
import { ShellComponent } from './shared/components/shell/shell.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ShellComponent, RouterOutlet],
})
export class AppComponent {}
