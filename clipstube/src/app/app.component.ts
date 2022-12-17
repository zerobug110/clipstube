import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showModal = true;

  ngOnInit() {
    setInterval(()=> this.showModal = !this.showModal, 100)
  }

}



