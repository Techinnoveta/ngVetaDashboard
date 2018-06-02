import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
	sessionKey: any;
	constructor() {
		this.sessionKey = {};
	}

	isLoggedIn(): boolean {
		this.sessionKey = JSON.parse(localStorage.getItem('token'));
		if (this.sessionKey) {
			return true;
		}
		return false;
	}
}
