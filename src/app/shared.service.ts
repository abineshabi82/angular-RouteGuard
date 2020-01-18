import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable()
export class SharedService{
  private bs=new BehaviorSubject<boolean>(false);
  bs$=this.bs.asObservable();
  constructor(){}
  changeBS(x:boolean){
    this.bs.next(x);
  }
}