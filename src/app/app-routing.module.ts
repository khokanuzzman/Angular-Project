import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './components/crud/crud.component';
import { RandomPrjComponent } from './components/random-prj/random-prj.component';
import { CustomsComponent } from './components/customs/customs.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ParentComponent } from './components/parent/parent.component';
import { CrudOperationComponent } from './components/crud/crud-operation/crud-operation.component';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { FormsComponent } from './components/forms/forms.component';
import { FirebsLearningComponent } from './components/firebs-learning/firebs-learning.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CoverHomepageComponent } from './components/cover-homepage/cover-homepage.component';


const routes: Routes = [
  { path: '', redirectTo: '/cover', pathMatch: 'full' },
  { path: 'home', component:HomeComponent},
  { path: 'cover', component:CoverHomepageComponent},
  { path: 'crud', component: CrudComponent },
  { path: 'random',component: RandomPrjComponent },
  { path: 'customs', component: CustomsComponent },
  { path: 'parent', component: ParentComponent},
  { path: 'dragdrop', component: DragdropComponent},
  { path: 'get-data', component:CrudOperationComponent},
  { path: 'contact', component:FormsComponent},
  { path: 'firebase', component:FirebsLearningComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  // { path: '',component: HomeComponent },
  //  { path: 'home',
  //    redirectTo: '',
  //   pathMatch: 'full'
  //  },
   { path: '**', component: NotFoundPageComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
