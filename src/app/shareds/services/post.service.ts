import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../interfaces/post.interface";


@Injectable({
    providedIn: 'root'
})

export class PostService {
    constructor(private http: HttpClient) { }
    private readonly url = 'https://jsonplaceholder.typicode.com';
    get() {
        return this.http.get<Post[]>(this.url + '/posts')
    }
}
