import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './components/crud/crud.component';
import { RandomPrjComponent } from './components/random-prj/random-prj.component';
import { CustomsComponent } from './components/customs/customs.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ParentComponent } from './components/parent/parent.component';
import { CrudOperationComponent } from './components/crud/crud-operation/crud-operation.component';


const routes: Routes = [
  {path:'',component:RandomPrjComponent},
  { path: 'crud', component: CrudComponent },
  { path: 'random',component: RandomPrjComponent },
  { path: 'customs', component: CustomsComponent },
  { path: 'parent', component: ParentComponent},
  { path: 'get-data', component:CrudOperationComponent},
  { path: '**', component: NotFoundPageComponent},
  // { path: '',component: HomeComponent },
   { path: 'home',
     redirectTo: '',
    pathMatch: 'full'
   },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
