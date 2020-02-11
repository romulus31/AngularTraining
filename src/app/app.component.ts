import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{


  counterSub: Subscription;
  secondes: number;

  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSub = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  isAuth = false;

  
  appareils: any[];

  constructor(private appareilsServices: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );

  }

  ngOnDestroy(){
    this.counterSub.unsubscribe();
  }


}
