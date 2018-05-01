import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 	pageInfo;
  	constructor(
  		public authService: AuthService,
  		private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private router: Router) {
  		this.router.events
        .filter(event => event instanceof NavigationEnd)
        .map(() => this.activatedRoute)
        .map(route => {
            while (route.firstChild) route = route.firstChild;
            return route;
        })
        .filter(route => route.outlet === 'primary')
        .mergeMap(route => route.data)
        .subscribe((event) => {
        	console.log(event);
            this.titleService.setTitle(event['title']);
            this.pageInfo = event;
        });
  	}

  	public ngOnInit() {

  	}
}
