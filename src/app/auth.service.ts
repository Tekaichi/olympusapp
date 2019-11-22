import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './shared/models/user';

let users = [{ name: 'Jason', password: 'test' }, { name: 'kappa', password: 'test2' }];

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public currentUser: User;

    constructor() {
        this.currentUser = null;
        
    }


    login(name, password) {
        var i;
        //console.log(123);
        //console.log(users);
        for (i = 0; i < users.length; i++) {
            //console.log(1123123);
            //console.log(username);
            //console.log(users[i]);
            if (users[i].name == name && users[i].password == password) {
                this.currentUser = users[i];
                //console.log(this.currentUser);
                return true;
            }
        }
        //console.log(this.currentUser);
        return false;
    }

    public get currentUserValue() {
        return this.currentUser;
    }

    register(name, password) {
        var u = {
            name,
            password
        }
        users.push(u);
        this.currentUser = u;
        //console.log(this.currentUser);
        //console.log(users);
    }
    logout() {
        this.currentUser = null;
        //console.log(this.currentUser);
    }

}
