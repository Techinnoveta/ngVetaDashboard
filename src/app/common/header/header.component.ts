import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	user : any ;
	isLogged : boolean ;
  	constructor(private router:Router, public authService: AuthService) { }

  	ngOnInit() {

  	}

    logout(): void {
        localStorage.removeItem('sessionKey');
        this.router.navigate(['login']);
    }

}
