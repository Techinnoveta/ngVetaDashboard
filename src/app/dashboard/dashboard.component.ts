import { Component, OnInit } from '@angular/core';

import { CurrencyService } from './currency/currency.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    currency: any;
    constructor(private currencyService: CurrencyService) {
        
	}

    ngOnInit() {
        this.currency =this.currencyService.getAllCurrency();
        console.log(this.currency);
    }

}
