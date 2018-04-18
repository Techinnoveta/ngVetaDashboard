import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

@Injectable()
export class AppService {
    apiEndPoint: string = environment.apiurl;
    response: Object;
    sessionKey: string;
  	constructor(private router:Router, private http: HttpClient) {
  	   this.sessionKey = JSON.parse(localStorage.getItem('sessionKey'));
  	}

    post(api, data): Observable<any>{
        return this.http.post(
        	this.buildUrl(api), data)
        	.map(this.normalCallback)
        	.catch(this.errorCallback);
    }

    get(api, data): Observable<any>{
        return this.http.get(
        	this.buildUrl(api))
        	.map(this.normalCallback)
        	.catch(this.errorCallback);
    }

    buildUrl(api) {
        let url = this.apiEndPoint + api;
        this.sessionKey = JSON.parse(localStorage.getItem('sessionKey'));
        if (this.sessionKey) {
            if (url.indexOf('?') > -1) {
                url += '&sessionKey=' + this.sessionKey;
            } else {
                url += '?sessionKey=' + this.sessionKey;
            }
        }
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
	        localStorage.removeItem('sessionKey');
	        this.router.navigate(['login']);
	    }

	    return Observable.throw(res.error);
	}

}
 