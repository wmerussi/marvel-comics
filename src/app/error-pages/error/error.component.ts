import { Component } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

/**
 * This component is designed to show a custom message on error page
 */
@Component({
  selector: 'ap-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  private errorMessage: string

  constructor(private route: ActivatedRoute) {
    /** Gets the URL 'errorMessage' text and prints on page */
    this.route.params
      .subscribe((params: Params) => this.errorMessage = params['errorMessage'])
  }
}
