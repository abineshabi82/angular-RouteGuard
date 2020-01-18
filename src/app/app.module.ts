import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import {FilterGender} from './cusPipe';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {SharedService} from './shared.service';
import {RouteGuard} from './routeGuard';

const routes:Routes=[
  {path:'demo',component:HelloComponent},
  {path:'home',component:AppComponent,canActivate:[RouteGuard]}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule , RouterModule.forRoot(routes)],
  declarations: [ AppComponent, HelloComponent,FilterGender ],
  bootstrap:    [ AppComponent ],
  providers:[SharedService,RouteGuard]
})
export class AppModule { }
