import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  public get() {
    return this.httpClient.get("https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow");
  }

  public getUserData(userId) {
    return this.httpClient.get("https://api.stackexchange.com/2.2/users/" + userId + "?order=desc&sort=reputation&site=stackoverflow");
  }

  public getTagData(userId) {
    return this.httpClient.get("https://api.stackexchange.com/2.2/users/" + userId + "/tags?order=desc&sort=popular&site=stackoverflow");
  }

  public getQuestionsOnUser(userId) {
    return this.httpClient.get("https://api.stackexchange.com/2.2/users/" + userId + "/questions?order=desc&sort=activity&site=stackoverflow");
  }
}
