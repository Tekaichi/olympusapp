import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './shared/models/user';

let users = [{ username: 'Jason', password: 'test' }, { username: 'kappa', password: 'test2' }];

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public currentUser: User;

    constructor() {
        this.currentUser = null;
    }


    login(username, password) {
        var i;
        //console.log(123);
        //console.log(users);
        for (i = 0; i < users.length; i++) {
            //console.log(1123123);
            //console.log(username);
            //console.log(users[i]);
            if (users[i].username == username && users[i].password == password) {
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

    register(username, password) {
        var u = {
            username,
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
