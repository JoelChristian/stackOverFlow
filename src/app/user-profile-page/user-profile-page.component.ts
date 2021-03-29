import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {

  userId;
  data;
  tags;
  questions;

  constructor(private activatedRoute: ActivatedRoute, public backendService: BackendService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(res => {
      this.userId = +res.id;
      console.log(this.userId);
      this.getUserData(this.userId);
      this.getTagData(this.userId);
      this.getQuestionsOnUser(this.userId);
    });
  }

  getUserData(userId) {
    this.backendService.getUserData(userId).subscribe((ret: any) => {
      console.log(ret);
      this.data = ret.items[0];
    })
  }

  getTagData(userId) {
    this.backendService.getTagData(userId).subscribe((ret: any) => {
      console.log("tags are as below")

      this.tags = ret.items;
      console.log(this.tags);
    })
  }

  getQuestionsOnUser(userId) {
    this.backendService.getQuestionsOnUser(userId).subscribe((ret: any) => {
      console.log("questions are as below")

      this.questions = ret.items;
      console.log(this.questions);
    })
  }


}
