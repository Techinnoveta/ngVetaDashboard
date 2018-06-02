
import {throwError as observableThrowError, Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class AppService {
    apiEndPoint: string = environment.apiurl;
    response: Object;
    token: string;
    data: any;
    error: any;
    httpOptions: any;
    
  	constructor(private router:Router, private http: HttpClient,) {
  	   this.token = JSON.parse(localStorage.getItem('token'));
    }
      
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.token = JSON.parse(localStorage.getItem('token'));
        if(this.token) {
            request = request.clone({
                headers: request.headers.set(
                    'Authorization', 'Bearer ' + this.token
                )
            });
        }
        return next.handle(request);
    }

    post(api, data): Observable<any>{
        return this.http.post(
            this.buildUrl(api), data);
    }

    get(api, data): Observable<any>{
        return this.http.get(
            this.buildUrl(api))
    }

    postWithJWT(api, data): Observable<any>{
        this.token = JSON.parse(localStorage.getItem('token'));
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                Authorization: 'Bearer ' + this.token
            })
        };
        return this.http.post(
            this.buildUrl(api), data, this.httpOptions);
    }

    getWithJWT(api, data): Observable<any>{
        this.token = JSON.parse(localStorage.getItem('token'));
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                Authorization: 'Bearer ' + this.token
            })
        };
        return this.http.get(
            this.buildUrl(api), this.httpOptions)
    }

    buildUrl(api) {
        let url = this.apiEndPoint + api;
        return url;
    }

    normalCallback(res): Observable<any> {
    	console.log(res);
	    if (res.result === 'ok') {
	        return res;
	    } else {
	        return this.errorCallback.call(res);
	    }
	}

	errorCallback(res) {
		console.log(res);
	    if (res.error.code == 105) { //session timeout
	        localStorage.removeItem('token ');
	        this.router.navigate(['login']);
	    }
	    return observableThrowError(res.error);
	}

}
 