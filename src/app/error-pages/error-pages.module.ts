import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'

import { ErrorComponent } from './error/error.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { ForbiddenComponent } from './forbidden/forbidden.component'

@NgModule({
  declarations: [
    ErrorComponent,
    ForbiddenComponent,
    NotFoundComponent,
  ],
  exports: [
    ErrorComponent,
    ForbiddenComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    HttpModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class ErrorPagesModule { }
