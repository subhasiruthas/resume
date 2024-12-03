import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from '../about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from '../skills/skills.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    ResumeComponent,
    AboutComponent,
    SkillsComponent,
    

  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    FormsModule,
    ResumeRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
})
export class ResumeModule { }
