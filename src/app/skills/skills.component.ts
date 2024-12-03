import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResumeService } from '../resume/resume.service';
import { skills } from '../models/skills';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsList!: skills;
  skill$ = new BehaviorSubject<skills>({
    Languages: [],
    Framework: [],
    Database: [],
    CloudPlatform: "",
    Tools: []
  });

  constructor(private resumeService: ResumeService, private router: Router) { }

  ngOnInit(): void {
    if (this.resumeService.loginUser == "") {
      this.router.navigate(['subha'])
    } else {
      this.getSkillsDetails();
    }
  }

  getSkillsDetails() {
    this.resumeService.getSkillsDetails().subscribe({
      next: (res) => {
        this.skillsList = JSON.parse(JSON.stringify(res));

        for (let key in this.skillsList) {
          setTimeout(() => {
            if (Array.isArray(this.skillsList[key])) {
              const updatedList = [...this.skill$.getValue()[key], ...this.skillsList[key]];
              this.skill$.next({
                ...this.skill$.getValue(),
                [key]: updatedList
              });
            } else {
              this.skill$.next({
                ...this.skill$.getValue(),
                [key]: this.skillsList[key]
              });
            }
          }, 1000 * Object.keys(this.skillsList).indexOf(key));
        }

      },
      error: (err) => console.log(err)
    })
  }

  about() {
    this.router.navigate(['about']);
  }
  workexp() {
    this.router.navigate(['workexp']);
  }
}
