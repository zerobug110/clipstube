import { Injectable } from '@angular/core';

interface Imodal {
  id: string;
  visible: boolean
}
@Injectable({
  providedIn: 'root'
})
export class ModalService {
   private modals: Imodal[] = [];

   constructor() { }

   register(id: string) {
    this.modals.push({
      id,
      visible: false
    })
    console.log(this.modals)
   }

   isModalOpen(id: string) : boolean {
    return !!this.modals.find(element => element.id === id) ?.visible
  }


  toggleModal() {
    // this.visible = !this.visible

  }
}
