import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from '../../src/app/nav-bar/nav-bar.component';
import { ParticipantsComponent } from '../app/participants/participants.component';
import { SessionComponent } from '../app/session/session.component';

const routes: Routes = [
  {
    path: 'HomePage', component: NavBarComponent
  },
  {
    path: 'Participants', component: ParticipantsComponent
  },
  {
    path: 'Session', component: SessionComponent
  },
  {
    path: '',
    redirectTo: 'HomePage',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
