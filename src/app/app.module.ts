import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import { ViewStandardComponent } from './pages/admin/view-standard/view-standard.component';
import { AddStandardComponent } from './pages/admin/add-standard/add-standard.component';
import { UpdateStandardComponent } from './pages/admin/update-standard/update-standard.component';
import { AdminGuard } from './services/admin.guard';
import { AddSectionComponent } from './pages/admin/add-section/add-section.component';
import { ViewSectionComponent } from './pages/admin/view-section/view-section.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ViewUserComponent } from './pages/admin/view-user/view-user.component';
import { AddUserComponent } from './pages/admin/add-user/add-user.component';
import {MatSelectModule} from '@angular/material/select';
import { UpdateSectionComponent } from './pages/admin/update-section/update-section.component';
import { ViewSubjectComponent } from './pages/admin/view-subject/view-subject.component';
import { AddSubjectComponent } from './pages/admin/add-subject/add-subject.component';
import { UpdateSubjectComponent } from './pages/admin/update-subject/update-subject.component';
import { UpdateUserComponent } from './pages/admin/update-user/update-user.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
//import { ViewQuizComponent } from './view-quiz/view-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { UpdateQuestionsComponent } from './pages/admin/update-questions/update-questions.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';

import { InstructionsComponent } from './pages/user/instructions/instructions.component';

import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ForgotPasswordComponent } from './pages/admin/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './pages/admin/change-password/change-password.component';
import { ChangeUserpassComponent } from './pages/user/change-userpass/change-userpass.component';
import { ResultComponent } from './pages/admin/result/result.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxPaginationModule } from 'ngx-pagination';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    ViewStandardComponent,
    AddStandardComponent,
    UpdateStandardComponent,
    AddSectionComponent,
    ViewSectionComponent,
    ViewUserComponent,
    AddUserComponent,
    UpdateSectionComponent,
    ViewSubjectComponent,
    AddSubjectComponent,
    UpdateSubjectComponent,
    UpdateUserComponent,
    AddQuizComponent,
    ViewQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionsComponent,
    UpdateQuestionsComponent,
    UserSidebarComponent,
    LoadQuizComponent,
    InstructionsComponent,
    
    StartQuizComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    ChangeUserpassComponent,
    ResultComponent
    
    // ViewQuizComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    Ng2SearchPipeModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxPaginationModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    })
  ],
  providers: [AuthInterceptorProviders,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
