import { Injectable } from '@angular/core';

import { AppService } from '../app.service';

@Injectable()
export class LoginService {

  	constructor(private appService: AppService) { }

  	login(data){
  		return this.appService.post('/auth/login', data);
  	}

}
