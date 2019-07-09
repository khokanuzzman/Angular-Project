import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResizableModule } from 'angular-resizable-element';

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
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule }   from '@angular/forms';


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
    CrudOperationComponent,
    DragdropComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpModule,
    ResizableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
