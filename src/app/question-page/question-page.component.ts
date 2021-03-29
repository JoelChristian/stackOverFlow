import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {

  data = [];

  constructor(private backendService: BackendService, public router: Router) { }

  ngOnInit(): void {

    this.backendService.get().subscribe((ret: any) => {
      console.log(ret);
      this.data = ret.items;
    })

  }

  goToUserProfile(items) {
    this.router.navigate(['user-profile-page'], { queryParams: { id: items.owner.user_id } });
  }

}
