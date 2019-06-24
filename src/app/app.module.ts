import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './components/crud/crud.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'crud', component: CrudComponent },
  // { path: 'login',component: AuthComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: '',component: HomeComponent },
  // { path: 'home',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
]

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
