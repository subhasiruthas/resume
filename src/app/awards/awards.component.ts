import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume/resume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  recs: string[] = [];
  trainings: string[] = [];

  constructor(private resumeService: ResumeService, private router: Router) { }

  ngOnInit(): void {
    if (this.resumeService.loginUser == "") {
      this.router.navigate(['subha'])
    } else {
      this.recs = ["Valeo Employee of the month", "TCS GEM Awardee"];
      this.trainings = ["Angular certified (Internshala online training)",
      "AHM-250 certified on American healthcare system (Academy of Healthcare Management)",
      "TCS certified on healthcare and health Insurance (TCS Business Domain Academy)",
      "Business English Certification Level B1 (University of Cambridge)"
    ];

  }

  }

}
