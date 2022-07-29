import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'event',
    loadChildren: () => import('./feature/event/event.module').then(m => m.EventModule),
  },
  {
    path: 'participant',
    loadChildren: () => import('./feature/participant/participant.module').then(m => m.ParticipantModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
