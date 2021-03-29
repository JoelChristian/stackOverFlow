import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'question-page',
    component: QuestionPageComponent
  },
  {
    path: 'user-profile-page',
    component: UserProfilePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
