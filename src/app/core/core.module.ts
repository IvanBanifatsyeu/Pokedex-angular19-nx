import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CoreRoutingModule } from './core-routing.module'
import { CoreComponent } from './core.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [CoreComponent],
  imports: [CommonModule, CoreRoutingModule],
})
export class CoreModule {}
