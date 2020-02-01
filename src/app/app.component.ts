import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuth = false;

  
  appareils: any[];

  constructor(private appareilsServices: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );

  }

  ngOnInit(){
    this.appareils = this.appareilsServices.appareils;
  }

  onAllumer(): void {
this.appareilsServices.switchOnAll();
  }

  onEteindre(){
    if(confirm('Etes-vous sur de vouloir éteindre tous vos appareils ?')){
      this.appareilsServices.switchOffAll();
    } else {
      return null;
    }
  }


}
