import { Routes } from '@angular/router';

import { NoContentComponent } from './no-content';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { AuthGuard} from './auth/auth.guard';

export const ROUTES: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '**', component: NoContentComponent, canActivate: [AuthGuard] },

];
