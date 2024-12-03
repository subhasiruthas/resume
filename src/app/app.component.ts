import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeService } from './resume/resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dev';
  constructor(private router: Router, public resumeService:ResumeService){
    this.router.navigate([''])
  }
}
