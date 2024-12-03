import { Injectable } from '@angular/core';
import { BasehttpService } from '../service/basehttp.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
 
  loginUser: string = "";
  objective: string = "To sharpen my knowledge, develop my skills, and widen my experience by being part of a progressive and leading organization"

  constructor(private httpService: BasehttpService) { }

  getAboutData() {
    return this.httpService.doGetCall(environment.aboutData);
  }

  getObjective() {
    return this.objective;
  }

  getAcademicDetails() {
    return this.httpService.doGetCall(environment.academics);
  }

  getSkillsDetails() {
    return this.httpService.doGetCall(environment.skills);
  }

  getWorkExp() {
    return this.httpService.doGetCall(environment.workexp);
  }
}
