import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modalID = ''

  constructor(public modal: ModalService ) {
    // console.log(this.modal.visible)
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.modal.toggleModal()
    console.log("close")
  }
}
