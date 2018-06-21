import { Component, ElementRef, EventEmitter, OnInit, Renderer2, ViewChild } from '@angular/core'

@Component({
  selector: 'ap-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  inputs: ['padding'],
  outputs: ['onClose'],
})
export class ModalComponent implements OnInit {
  /** Inputs */
  public padding: boolean = true

  /** Outputs */
  public onClose: EventEmitter<any> = new EventEmitter<any>()

  @ViewChild('modal')
  private modal: ElementRef

  @ViewChild('content')
  private content: ElementRef

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.listen(this.modal.nativeElement, 'click', () => this.close())
    this.renderer.listen(this.content.nativeElement, 'click', ev => ev.stopPropagation())
  }

  public close() {
    this.renderer.removeClass(this.modal.nativeElement, 'open')
    this.onClose.emit()
  }

  public open() {
    this.renderer.addClass(this.modal.nativeElement, 'open')
  }
}
