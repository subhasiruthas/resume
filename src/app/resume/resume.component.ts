import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResumeService } from './resume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css', './resume.component.scss']
})
export class ResumeComponent implements OnInit {
  username: string = "";
  constructor(private resumeService: ResumeService, private router: Router) { }

  ngOnInit(): void {
  }
  login(loginForm: NgForm) {
    console.log(loginForm.value);
    this.resumeService.loginUser = loginForm.value.username;
    console.log(this.resumeService.loginUser);
    this.router.navigate(['about']);

  }

}
