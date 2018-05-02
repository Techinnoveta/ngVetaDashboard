import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class LocalstorageService {
    user: any = { firstName: 'Henri', lastName: 'Bergson' };
    constructor(protected localStorage: LocalStorage) {
        
    }

    setUser(){
        this.localStorage.setItem('user', this.user).subscribe(() => {});
    }

    getUser(){
        this.localStorage.getItem<any>('user').subscribe((user) => {
            this.user = user;
        });
        return this.user;
    }

}