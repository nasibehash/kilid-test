import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{
  path: ':type',
  component: LayoutComponent,
  children: [
    {
      path: 'tehran',
      loadChildren: () => import('./city-info/city-info.module').then((mod) => mod.CityInfoModule),
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
