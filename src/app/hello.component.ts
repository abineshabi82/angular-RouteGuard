import { Component, Input } from '@angular/core';
import {SharedService} from './shared.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'hello',
  template: `<h1>Hello {{sharedData}}!</h1>
  <button (click)="changeSD()">change sd</button>
  <button routerLink="/home">home</button>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  sharedData:boolean;
    constructor(private sd:SharedService){}

ngOnInit(){
  this.sd.bs$.subscribe(x=>this.sharedData=x);
}
changeSD(){
  this.sd.changeBS(!this.sharedData);
}
}
