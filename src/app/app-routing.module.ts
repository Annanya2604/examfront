import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { AddSectionComponent } from './pages/admin/add-section/add-section.component';
import { AddStandardComponent } from './pages/admin/add-standard/add-standard.component';
import { AddSubjectComponent } from './pages/admin/add-subject/add-subject.component';
import { AddUserComponent } from './pages/admin/add-user/add-user.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateQuestionsComponent } from './pages/admin/update-questions/update-questions.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { UpdateSectionComponent } from './pages/admin/update-section/update-section.component';
import { UpdateStandardComponent } from './pages/admin/update-standard/update-standard.component';
import { UpdateSubjectComponent } from './pages/admin/update-subject/update-subject.component';
import { UpdateUserComponent } from './pages/admin/update-user/update-user.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';

import { ViewSectionComponent } from './pages/admin/view-section/view-section.component';
import { ViewStandardComponent } from './pages/admin/view-standard/view-standard.component';
import { ViewSubjectComponent } from './pages/admin/view-subject/view-subject.component';
import { ViewUserComponent } from './pages/admin/view-user/view-user.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ForgotPasswordComponent } from './pages/admin/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './pages/admin/change-password/change-password.component';
import { ChangeUserpassComponent } from './pages/user/change-userpass/change-userpass.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ResultComponent } from './pages/admin/result/result.component';



const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    
    pathMatch:'full',

  },
  {
    path:'login',
    component:LoginComponent,
    //pathMatch:'full',
  },
  
  {
    path:'forgot-password',
    component:ForgotPasswordComponent
  },
  {
    path:'admin',
    component:DashboardComponent,
    //pathMatch:'full'
    canActivate:[AdminGuard],
    
    children:[
      {
        path:'standard',
        component:ViewStandardComponent,
      },
      {
        path:'add-standard',
        component:AddStandardComponent,
      },
      {
        path:'updatestd/:standardId',
        component:UpdateStandardComponent
      },
      {
        path:'add-section',
        component:AddSectionComponent
      },
      {
        path:'section',
        component:ViewSectionComponent
      },
      {
        path:'users',
        component:ViewUserComponent
      },
      {
        path:'add-users',
        component:AddUserComponent
      },
      {
        path:'updatesec/:sectionId',
        component:UpdateSectionComponent
      },
      {
        path:'subject',
        component:ViewSubjectComponent
      },
      {
        path:'add-subject',
        component:AddSubjectComponent
      },
      {
        path:'updatesub/:subjectId',
        component:UpdateSubjectComponent
      },
      {
        path:'updateuser/:id',
        component:UpdateUserComponent
      },
      {
        path:'viewquiz',
        component:ViewQuizComponent
      },
      {
        path:'addquiz',
        component:AddQuizComponent
      },
      {
        path:'updatequiz/:quizId',
        component:UpdateQuizComponent
      },
      {
        path:'viewquestions/:quizId',
        component:ViewQuizQuestionsComponent
      },
      {
        path:'addquestions/:quizId',
        component:AddQuestionsComponent
      },
      {
        path:'updatequestions/:quizId/:quesId',
        component:UpdateQuestionsComponent
      },
      {
        path:'changepassword',
        component:ChangePasswordComponent
      },
      {
        path:"profile",
        component:ProfileComponent
      },
      {
        path:'home',
        component:HomeComponent,
        //pathMatch:'full',
      },
      {
        path:'result',
        component:ResultComponent
      }
      

    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[NormalGuard], 
    children:[
      {
        path:'',
        component:LoadQuizComponent
      },
      {
        path:'instructions/:quizId',
        component:InstructionsComponent
      },
      {
        path:'start/:quizId',
        component:StartQuizComponent
      },
      {
        path:'changepass',
        component:ChangeUserpassComponent
      }
    ]
    
    
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
