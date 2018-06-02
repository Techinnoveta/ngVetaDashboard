import { Injectable } from '@angular/core';

import { AppService } from '../../app.service';
@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    data: any;
    constructor(private appService: AppService) { }

  	getAllCurrency(){
        return this.appService.postWithJWT('/currency/all', '').subscribe((results) => this.data = results);
  	}
}
