import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeAnimauxComponent } from './ui-components/liste-animaux/liste-animaux.component';
import { PageAnimalComponent } from './ui-components/page-animal/page-animal.component';

const routes: Routes = [
  { path: '', redirectTo: '/liste-animaux', pathMatch: 'full' },
  { path: 'liste-animaux', component: ListeAnimauxComponent },
  { path: 'ajouter', component: PageAnimalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public constructor() {}
}
