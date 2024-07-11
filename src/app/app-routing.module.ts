import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { CinemaHomeComponent } from './cinema-home/cinema-home.component';
import { NextReleasesComponent } from './next-releases/next-releases.component';
import { PromotionsComponent } from './promotions/promotions.component';

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
  },
  {
    path:'Promotions',
    component:PromotionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
