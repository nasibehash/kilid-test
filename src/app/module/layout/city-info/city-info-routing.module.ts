import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityInfoComponent } from './pages';

const routes: Routes = [{ path: '', component: CityInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityInfoRoutingModule { }
