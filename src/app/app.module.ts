import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './components/crud/crud.component';
import { RandomPrjComponent } from './components/random-prj/random-prj.component';
import { HomeComponent } from './components/home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CustomsComponent } from './components/customs/customs.component';


@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    RandomPrjComponent,
    HomeComponent,
    CustomsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
