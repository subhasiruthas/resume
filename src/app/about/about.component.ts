import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume/resume.service';
import { Router } from '@angular/router';
import { about } from '../models/about';
import { academics, details } from '../models/academics';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  loginUser: string = "";
  aboutData: about = {
    name: '',
    location: '',
    email: '',
    contact: 0
  };
  objective: string = "";
  academicsData!: academics;
  course!: details;
  isSkillClicked: boolean = false;
  Object = Object;

  constructor(private resumeService: ResumeService, private router: Router,) { }

  ngOnInit(): void {
    if (this.resumeService.loginUser == "") {
      this.router.navigate(['subha'])
    } else {
      this.loginUser = this.resumeService.loginUser;
    }
    this.getAboutDetails();
    this.getObjective();
  }

  getAboutDetails() {
    this.resumeService.getAboutData().subscribe({
      next: (res) => { this.aboutData = JSON.parse(JSON.stringify(res)); },
      error: (err) => console.log(err)
    })
  }

  getObjective() {
    this.objective = this.resumeService.getObjective();
  }

  getAcademicDetails() {
    this.resumeService.getAcademicDetails().subscribe({
      next: (res) => { this.academicsData = JSON.parse(JSON.stringify(res)); 
      this.course = this.academicsData.course},
      error: (err) => console.log(err)
    })
  }

  academic(){
    this.getAcademicDetails();
    this.isSkillClicked = !this.isSkillClicked;
  }
  skills() {
    this.router.navigate(['skills']);
  }
}
