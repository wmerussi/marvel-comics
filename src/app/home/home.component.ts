import { Component, OnInit, ViewChild } from '@angular/core'

import { ComicsService } from '../services/comics.service'

import { ModalComponent } from '../components/modal/modal.component'

import { Comic } from '../models/comic.model'

@Component({
  selector: 'ap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ComicsService],
})
export class HomeComponent implements OnInit {
  private comicDetail: Comic
  private comics: Comic[]
  private selectedComics: Comic[] = []

  @ViewChild('cartModal')
  private cartModal: ModalComponent

  @ViewChild('detailsModal')
  private detailsModal: ModalComponent

  constructor(private comicsService: ComicsService) { }

  ngOnInit() {
    this.comicsService.get().subscribe(data =>
      this.comics = data.results.map(comic => new Comic(comic)))
  }

  private checkout() {
    this.cartModal.open()
  }

  private closeCartModal() {
    this.cartModal.close()
  }

  private closeDetailsModal() {
    this.detailsModal.close()
    this.comicDetail = new Comic()
  }

  private emptySelectedComics(): boolean {
    return this.selectedComics.length < 1
  }

  private excludeComic(comic: Comic) {
    this.selectedComics = this.selectedComics.filter(selected => selected !== comic)
    this.closeDetailsModal()
  }

  private includeComic(comic: Comic) {
    this.selectedComics.push(comic)
    this.closeDetailsModal()
  }

  private isSelected(): boolean {
    return this.comicDetail && this.selectedComics.includes(this.comicDetail)
  }

  private showDetails(comic: Comic) {
    this.comicDetail = comic
    this.detailsModal.open()
  }
}
