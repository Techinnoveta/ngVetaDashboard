import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { filter, map, mergeMap } from 'rxjs/operators';

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
        .pipe(filter(event => event instanceof NavigationEnd))
        .pipe(map(() => this.activatedRoute))
        .pipe(map(route => {
            while (route.firstChild) route = route.firstChild;
            return route;
        }))
        .pipe(filter(route => route.outlet === 'primary'))
        .pipe(mergeMap(route => route.data))
        .subscribe((event) => {
        	console.log(event);
            this.titleService.setTitle(event['title']);
            this.pageInfo = event;
        });
  	}

  	ngOnInit() {
    }
}
