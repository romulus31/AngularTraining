import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string = 'éteint';
  @Input() appareilIndex: number;
  @Input() id: number;
  
  constructor(private appareilsService: AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  onSwitch(){
    if(this.appareilStatus === 'éteint'){
      this.appareilsService.switchOnOne(this.appareilIndex);
    }
    else if (this.appareilStatus === 'allumé'){
      this.appareilsService.switchOffOne(this.appareilIndex);
    }
  }

}
