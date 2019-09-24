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
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CrudOperationComponent } from './components/crud/crud-operation/crud-operation.component';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// firebse config
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebsLearningComponent } from './components/firebs-learning/firebs-learning.component';
import { FirebaseService } from './services/firebase.service';
import { AddDataComponent } from './components/firebs-learning/add-data/add-data.component';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HeaderComponent } from './components/header/header.component';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// drag and drop

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
    FormsComponent,
    FirebsLearningComponent,
    AddDataComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    ResizableModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase,"bugfix"),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    Ng2SearchPipeModule,
    DragDropModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    BrowserAnimationsModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],

})
export class AppModule { }
