import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './components/crud/crud.component';
import { RandomPrjComponent } from './components/random-prj/random-prj.component';
import { HomeComponent } from './components/home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CustomsComponent } from './components/customs/customs.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { HttpModule } from '@angular/http';
import { CrudOperationComponent } from './components/crud/crud-operation/crud-operation.component';


@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    RandomPrjComponent,
    HomeComponent,
    CustomsComponent,
    NotFoundPageComponent,
    ParentComponent,
    ChildComponent,
    CrudOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
