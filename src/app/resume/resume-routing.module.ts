import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ResumeComponent } from './resume.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';

const routes: Routes = [
  { path: 'subha', component: ResumeComponent, },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'workexp', loadChildren: () => import('../workexp/workexp.module').then(m => m.WorkexpModule) },
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class ResumeRoutingModule { }
