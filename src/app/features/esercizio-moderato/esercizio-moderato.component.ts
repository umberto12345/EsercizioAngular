import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/shareds/interfaces/post.interface';
import { NgbdModalContent } from '../../dialogs/dialog-post/dialog-post.component';
import { FormBuilder } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged, startWith } from 'rxjs';

@Component({
  selector: 'app-moderato-base',
  templateUrl: './esercizio-moderato.component.html'
})
export class EsercizioModeratoComponent {
  posts: Post[] = [];
  subscription = new Subscription();
  inputSearch = this.fb.control('');
  col: string = 'col-12';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private router: Router
  ) { };

  ngOnInit() {
    this.posts = this.route.snapshot.data?.['posts'] as Post[];
    this.search();
  }

  search() {
    this.subscription.add(this.inputSearch.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      startWith("")
    ).subscribe({
      next: (value) => {
        this.posts = this.route.snapshot.data?.['posts'].filter((post: Post) =>
          post.title.toLocaleLowerCase().startsWith(<string>value?.toLocaleLowerCase()) || post.user?.username.toLowerCase().startsWith(<string>value?.toLocaleLowerCase())
        )
      },
    }))
  }

  deletePost(post: Post) {
    this.route.snapshot.data['posts'] = this.route.snapshot.data?.['posts']?.filter((_post: Post) => post.id != _post.id);
    this.posts = this.route.snapshot.data['posts'];
    console.log('elemento eliminato', post.id);
  }

  detail(post: Post) {
    this.open(post)
  }

  userRedirectEvent(post: Post) {
    this.router.navigate(['esercizio-moderato/user', post.user?.id])
  }

  open(post: Post) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.post = post;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}