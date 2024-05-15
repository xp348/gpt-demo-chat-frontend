import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { BotsPageComponent } from './features/bots-page/bots-page.component';
export const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    // canActivate: [NoAuthGuard],
    children: [
      { path: 'signin', component: AuthComponent },
      { path: 'register', component: AuthComponent },
      // { path: 'recovery', component: AuthComponent },
      { path: '', pathMatch: 'full', redirectTo: 'signin' },
    ],
  },
  {
    path: '',
    // canActivate: [AuthGuard],
    component: BotsPageComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  // { path: '**', redirectTo: 'page-errors' },
];
