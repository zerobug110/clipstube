import { Component, OnDestroy, Input, OnInit, Output } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit, OnDestroy {


  constructor(public modal: ModalService) { }

  ngOnInit(): void {
    this.modal.register('auth')
  }

  ngOnDestroy(): void {
      this.modal.unregister('auth')
  }


}
