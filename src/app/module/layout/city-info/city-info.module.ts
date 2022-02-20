import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityInfoRoutingModule } from './city-info-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CityInfoComponent } from './pages';
import { CityCardComponent } from './components';
import { PipeModule } from 'src/app/shared/pipe/pipe/pipe.module';


@NgModule({
  declarations: [
    CityInfoComponent,
    CityCardComponent,
  ],
  imports: [
    CommonModule,
    CityInfoRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    PipeModule
  ]
})
export class CityInfoModule { }
