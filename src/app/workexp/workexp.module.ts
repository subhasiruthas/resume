import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';


import { WorkexpRoutingModule } from './workexp-routing.module';
import { WorkexpComponent } from './workexp.component';
import { AwardsComponent } from '../awards/awards.component';


@NgModule({
  declarations: [
    WorkexpComponent,
    AwardsComponent
  ],
  imports: [
    CommonModule,
    WorkexpRoutingModule,
    MatButtonModule
  ],
  providers:[DatePipe ]
})
export class WorkexpModule { }
