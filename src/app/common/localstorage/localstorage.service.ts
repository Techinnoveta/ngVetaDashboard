import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {
    user: any = {};
    constructor() {
        
    }

    setUser(data){
        this.user = data;
        localStorage.setItem('user', JSON.stringify(this.user));
    }

    getUser(){
        return JSON.parse(localStorage.getItem('user'));
    }

}