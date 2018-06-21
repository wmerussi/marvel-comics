import { Component, ElementRef, EventEmitter, Renderer2, ViewChild } from '@angular/core'

import { Thumbnail } from '../../models/thumbnail.model'

@Component({
  selector: 'ap-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss'],
  inputs: [
    'excludeOnly',
    'fixedCardDetails',
    'isSelected',
    'showDetailsButton',
    'thumbnail',
    'title',
  ],
  outputs: ['onExcludeComic', 'onIncludeComic', 'onShowDetails'],
})
export class ComicCardComponent {
  /** Inputs */
  public fixedCardDetails: boolean
  public isSelected: boolean
  public showDetailsButton: boolean = true
  public thumbnail: Thumbnail
  public title: string

  /** Outputs */
  public onExcludeComic: EventEmitter<any> = new EventEmitter<any>()
  public onIncludeComic: EventEmitter<any> = new EventEmitter<any>()
  public onShowDetails: EventEmitter<any> = new EventEmitter<any>()

  @ViewChild('card')
  private card: ElementRef

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.card.nativeElement, 'background-image', `url("${ this.thumbnail }")`)
  }

  private excludeComic() {
    this.onExcludeComic.emit()
  }

  private getClasses(): Object {
    return {
      'is-selected': !!this.isSelected,
      'show-details': !!this.fixedCardDetails,
    }
  }

  private includeComic() {
    this.onIncludeComic.emit()
  }

  private showDetails() {
    this.onShowDetails.emit()
  }
}
