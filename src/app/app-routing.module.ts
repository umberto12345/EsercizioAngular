import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'esercizio-base' },
  {
    path: 'esercizio-base',
    loadChildren: () => import('./features/esercizio-base/esercizio-base.module').then((m) => m.EsercizioBaseModule),
  },
  {
    path: 'esercizio-moderato',
    loadChildren: () => import('./features/esercizio-moderato/esercizio-moderato.module').then((m) => m.EsercizioModeratoModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'esercizio-base' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
