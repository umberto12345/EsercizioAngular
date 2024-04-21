import { NgModule, inject } from '@angular/core';
import { Routes, RouterModule, ResolveFn } from '@angular/router';
import { EsercizioModeratoComponent } from './esercizio-moderato.component';
import { Post } from 'src/app/shareds/interfaces/post.interface';
import { PostService } from 'src/app/shareds/services/post.service';
import { filter, find, forkJoin, map, of } from 'rxjs';
import { UserService } from 'src/app/shareds/services/user.service';
import { UserComponent } from '../user/user.component';
import { User } from 'src/app/shareds/interfaces/user.interface';

export const postResolver: ResolveFn<Post[]> = () => {
  return forkJoin({
    posts: inject(PostService).get(),
    users: inject(UserService).get()
  }).pipe(
    map((result) => {
      if (!result?.posts || !result) {
        return [];
      }
      let postsWithUsers = result?.posts?.map((post) => {
        let userByIdPost = result?.users?.find((user) => user?.id == post?.userId);
        if (userByIdPost) {
          let initials = userByIdPost.name.split(' ');
          userByIdPost.initials = initials[0].charAt(0) + initials[1].charAt(0);
        }
        return { ...post, user: userByIdPost }
      })
      return postsWithUsers;
    }));
};

export const getUser: ResolveFn<User | null> = (route) => {
  let id = route.params['id'];
  return !id ? of(null) : inject(UserService).get().pipe(map(posts => <User>posts.find(post => post?.id == id)));
}

const routes: Routes = [
  {
    path: '',
    component: EsercizioModeratoComponent,
    resolve: { posts: postResolver }
  },
  {
    path: 'user/:id',
    component: UserComponent,
    resolve: { user: getUser }

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EsercizioModeratoRoutingModule { }

