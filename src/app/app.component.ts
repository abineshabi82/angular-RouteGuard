import { Component,OnInit } from '@angular/core';
import {SharedService} from './shared.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  sharedData:boolean;
  date=new Date();
  obj=[{name:'abinesh',gender:'male'},{name:'hari',gender:'female'}];
  constructor(private sd:SharedService){}

ngOnInit(){
  this.sd.bs$.subscribe(x=>this.sharedData=x);
}

}
