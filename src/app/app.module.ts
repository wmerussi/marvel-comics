/** Angular imports */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

/** Routing imports */
import { appRoutingProviders, routing } from './app.routing'

/** Modules imports */
import { ErrorPagesModule } from './error-pages/error-pages.module'

/** Component imports */
import { AppComponent } from './app.component'
import { ComicCardComponent } from './components/comic-card/comic-card.component'
import { ComicDetailsComponent } from './components/comic-details/comic-details.component'
import { ComicListComponent } from './components/comic-list/comic-list.component'
import { HomeComponent } from './home/home.component'
import { ModalComponent } from './components/modal/modal.component'

/** Directive imports */
import { RouterLinkStubDirective } from './directives/router-link-stub.directive'

@NgModule({
  declarations: [
    AppComponent,
    ComicCardComponent,
    ComicDetailsComponent,
    ComicListComponent,
    HomeComponent,
    ModalComponent,
    RouterLinkStubDirective,
  ],
  imports: [
    BrowserModule,
    ErrorPagesModule,
    routing,
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
