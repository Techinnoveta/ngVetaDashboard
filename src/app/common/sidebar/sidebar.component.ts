import { Component, OnInit } from '@angular/core';

import { MenuService } from '../menu/menu.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menu: any;
    constructor(private menuService: MenuService) { }

    ngOnInit() {
        this.menuService.getJSON().subscribe(data => {
            this.menu = data.menu;
            console.log(this.menu);
        });
    }
}
