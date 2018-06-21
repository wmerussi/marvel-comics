import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core'

import { BreakpointService } from '../../services/breakpoint.service'

import { ComicDetailsComponent } from '../comic-details/comic-details.component'
import { ModalComponent } from '../modal/modal.component'

import { Comic } from '../../models/comic.model'

@Component({
  selector: 'ap-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss'],
  inputs: ['comics', 'excludeOnly', 'selectedComics', 'showDetailsButton', 'smallerView'],
  outputs: ['onExcludeComic', 'onIncludeComic', 'onShowDetails'],
})
export class ComicListComponent implements OnInit {
  /** Inputs */
  public comics: Comic[] = []
  public excludeOnly: boolean
  public selectedComics: Comic[] = []
  public showDetailsButton: boolean = true
  public smallerView: boolean

  /** Outputs */
  public onExcludeComic: EventEmitter<Comic> = new EventEmitter<Comic>()
  public onIncludeComic: EventEmitter<Comic> = new EventEmitter<Comic>()
  public onShowDetails: EventEmitter<Comic> = new EventEmitter<Comic>()

  private breakpoint: BreakpointService = new BreakpointService('xl', 'max')
  private fixedCardDetails: boolean

  ngOnInit() {
    this.breakpoint.get().subscribe(largerXl => this.fixedCardDetails = largerXl)

    if (this.smallerView) this.fixedCardDetails = true
  }

  private comicIsSelected(comic: Comic): boolean {
    return this.selectedComics.includes(comic)
  }

  private excludeComic(comic: Comic) {
    this.onExcludeComic.emit(comic)
  }

  private includeComic(comic: Comic) {
    this.onIncludeComic.emit(comic)
  }

  private showDetails(comic: Comic) {
    this.onShowDetails.emit(comic)
  }
}
