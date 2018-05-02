import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageModule } from '@ngx-pwa/local-storage';

import { AppComponent } from './app.component';
import { NoContentComponent } from './no-content';

import {
    RouterModule,
    PreloadAllModules
} from '@angular/router';

import { ROUTES } from './app.routes';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';

import { AuthGuard} from './auth/auth.guard';

import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginService } from './login/login.service';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { MenuService } from './common/menu/menu.service';
import { LocalstorageService } from './common/localstorage/localstorage.service';

@NgModule({
    declarations: [
        AppComponent,
        NoContentComponent,
        FooterComponent,
        HeaderComponent,
        LoginComponent,
        DashboardComponent,
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        LocalStorageModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [
        AuthGuard,
        AppService,
        AuthService,
        LoginService,
        MenuService,
        LocalstorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
