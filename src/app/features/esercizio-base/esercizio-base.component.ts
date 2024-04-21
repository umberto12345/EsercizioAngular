import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/shareds/interfaces/post.interface';
import { PostService } from 'src/app/shareds/services/post.service';

@Component({
  selector: 'app-esercizio-base',
  templateUrl: './esercizio-base.component.html'
})
export class EsercizioBaseComponent {

  constructor(private route: ActivatedRoute) { };
  posts: Post[] = [];
  ngOnInit() {
    this.posts = this.route.snapshot.data['posts'] as Post[];
  }
}