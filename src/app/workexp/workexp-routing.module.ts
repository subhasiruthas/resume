import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkexpComponent } from './workexp.component';

const routes: Routes = [{ path: '', component: WorkexpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkexpRoutingModule { }
