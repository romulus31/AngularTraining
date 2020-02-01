import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuth = false;
  appareilOne = "Robot cuisine";
  appareilTwo = "Machine a laver";
  appareilThree = "Lave vaisselle";

appareils: any[];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );

  }

  onAllumer(): void {

  }

}
