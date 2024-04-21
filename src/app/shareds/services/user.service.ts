import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../interfaces/user.interface";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient) { }
    private readonly url = "https://jsonplaceholder.typicode.com/users";
    private _user: User | null = null;
    get user() {
        return this._user;
    }
    
    set user(user) {
        this._user = user;
    }

    get() {
        return this.http.get<User[]>(this.url);
    }
}