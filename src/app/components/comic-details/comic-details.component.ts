import { Component, ElementRef, EventEmitter, Renderer2, ViewChild } from '@angular/core'

import { Comic } from '../../models/comic.model'

@Component({
  selector: 'ap-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.scss'],
  inputs: ['comic', 'excludeOnly'],
  outputs: ['onExcludeComic', 'onIncludeComic'],
})
export class ComicDetailsComponent {
  /** Inputs */
  public excludeOnly: boolean
  public set comic(comic: Comic) {
    if (!comic) return

    this.detailedComic = comic
    this.description = comic.description
    this.imageUrl = comic.thumbnail.toString()
    this.title = comic.title
    this.setBackgroundImage(this.imageUrl)
  }

  /** Outputs */
  public onExcludeComic: EventEmitter<Comic> = new EventEmitter<Comic>()
  public onIncludeComic: EventEmitter<Comic> = new EventEmitter<Comic>()

  private detailedComic: Comic
  private description: string
  private imageUrl: string
  private title: string

  @ViewChild('imageBackground')
  private imageBackground: ElementRef

  constructor(private renderer: Renderer2) { }

  private excludeComic() {
    this.onExcludeComic.emit(this.detailedComic)
  }

  private includeComic() {
    this.onIncludeComic.emit(this.detailedComic)
  }

  private setBackgroundImage(url: string) {
    this.renderer.setStyle(this.imageBackground.nativeElement, 'background-image', `url(${ url })`)
  }
}
