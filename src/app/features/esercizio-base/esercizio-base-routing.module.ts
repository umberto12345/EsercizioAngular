import { NgModule, inject } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { EsercizioBaseComponent } from './esercizio-base.component';
import { PostService } from 'src/app/shareds/services/post.service';

export const postResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(PostService).get();
};

const routes: Routes = [
  {
    path: '',
    component: EsercizioBaseComponent,
    resolve:{posts:postResolver}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EsercizioBaseRoutingModule { }

