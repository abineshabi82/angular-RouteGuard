import {Injectable} from '@angular/core';
import {CanActivate,Router} from '@angular/router';
import {SharedService} from './shared.service';
@Injectable()
export class RouteGuard implements CanActivate{
  valid:boolean;
  constructor(private ss:SharedService,private router:Router){}
canActivate():boolean{
this.ss.bs$.subscribe(x=>this.valid=x);
if(this.valid===true)
return true;
else{
  this.router.navigate(['/']);
return false;
}
}
}