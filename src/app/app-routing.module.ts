import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './components/crud/crud.component';
import { RandomPrjComponent } from './components/random-prj/random-prj.component';


const routes: Routes = [
  { path: 'crud', component: CrudComponent },
  { path: 'random',component: RandomPrjComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: '',component: HomeComponent },
  // { path: 'home',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
