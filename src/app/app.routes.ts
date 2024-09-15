import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    // { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    // { path: 'login', component: LoginComponent },
    // { path: '', redirectTo: 'login', pathMatch: 'full' },
    // { path: 'projects/:id', component: AppComponent }

    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: 'profile', component: ProfileComponent },
          { path: 'settings', component: AboutComponent }
        ]
      },
      { path: '', redirectTo: '/dashboard/profile', pathMatch: 'full' }
];
