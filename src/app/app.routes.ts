import { Routes } from '@angular/router';

import { NoContentComponent } from './no-content';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { AuthGuard} from './auth/auth.guard';

export const ROUTES: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard], data: {title: 'Dashboard'}},
    { path: 'login', component: LoginComponent, data: {title: 'Login'}},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: {title: 'Dashboard'}},
    { path: '**', component: NoContentComponent, canActivate: [AuthGuard], data: {title: 'Unauthorized'}},

];
