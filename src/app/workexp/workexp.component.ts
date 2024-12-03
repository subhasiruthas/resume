import { Component, HostListener, OnInit } from '@angular/core';
import { ResumeService } from '../resume/resume.service';
import { roles, workexp } from '../models/workexp';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workexp',
  templateUrl: './workexp.component.html',
  styleUrls: ['./workexp.component.css']
})
export class WorkexpComponent implements OnInit {
  workexp!: workexp;
  roles!: roles;
  isScroll: boolean = false;
  isOpen: boolean[]=[];

  constructor(private resumeService: ResumeService, private router: Router) {
  }


  ngOnInit(): void {
    if (this.resumeService.loginUser == "") {
      this.router.navigate(['subha'])
    } else {
      this.getWorkExp();
    }
  }
  getWorkExp() {
    this.resumeService.getWorkExp().subscribe({
      next: (res) => {
        let resp = JSON.parse(JSON.stringify(res));
        this.workexp = resp.workexp;
        this.roles = resp.roles;
      },
      error: (err) => console.log(err)

    })
  }

  formatDatesAndCalculateDifference(start: string, end: string): string {
    if (end === "present") {
      end = new Date().toString();
    }
    const startDate = new Date(start);
    const endDate = new Date(end);
    const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = endDate.getMonth() - startDate.getMonth();

    const totalMonths = yearsDiff * 12 + monthsDiff;
    const totalYears = Math.floor(totalMonths / 12);

    return `${totalYears} years ${totalMonths % 12} months`;
  }

  gotoabout() {
    this.router.navigate(['about']);
  }
  gotoskills() {
    this.router.navigate(['skills']);
  }

  //   @HostListener('window:scroll', ['$event'])

  //   onPageScroll(event: any) {



  //     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  //     // Calculate the height of the content
  //     const contentHeight = document.documentElement.scrollHeight;

  //     // Calculate the height of the viewport
  //     const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;

  //     // Calculate the threshold position
  //     const threshold = (contentHeight) - viewportHeight;
  // console.log(scrollPosition);
  // console.log(threshold);
  //     // Check if the scroll position reaches the threshold
  //     if (scrollPosition > threshold) {
  //       this.isScroll = true;
  //     } else {
  //       this.isScroll = false;
  //     }
  // //     const scrollTop = (event.target as HTMLElement).scrollTop;
  // //     const scrollHeight = (event.target as HTMLElement).scrollHeight;
  // //     const clientHeight = (event.target as HTMLElement).clientHeight;
  // // console.log(clientHeight);
  // // console.log(clientHeight);

  // //     if (scrollTop + clientHeight >= (scrollHeight-10)) {
  // //       console.log("inside")
  // //     }
  //   }

  onMouseMove(event: MouseEvent) {
    const cursorPosition = event.pageY;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
console.log("c")
    if (cursorPosition >= viewportHeight / 2) {
      this.isScroll = true;
    } else {
      this.isScroll = false;
    }
  }
}
