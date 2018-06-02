import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

import { LocalstorageService } from '../../common/localstorage/localstorage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	user : any = {};
	isLogged : boolean ;
  	constructor(private router:Router, public authService: AuthService,  public localstorageService: LocalstorageService) {
    
    }

  	ngOnInit() {
        this.user = this.localstorageService.getUser();
  	}

    logout(): void {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }

}
