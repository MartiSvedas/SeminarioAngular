import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { CinemaHomeComponent } from './cinema-home/cinema-home.component';
import { NextReleasesComponent } from './next-releases/next-releases.component';

const routes: Routes = [
  {path:'',
  redirectTo: 'Cinema',
  pathMatch:'full'
},
  {path: 'Cinema',
    component:CinemaHomeComponent
  },
  {path:'nextReleases',
    component: NextReleasesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
