import { NotFoundComponent } from './not-found/not-found.component';
import { LoginGuard } from './guard/login.guard';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { PlansComponent } from './plans/plans.component';
import { FilesComponent } from './files/files.component';
import { FriendsComponent } from './friends/friends.component';
import { CoursesComponent } from './courses/courses.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { reduce } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dash-board',
    component: DashBoardComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'friends',
    component: FriendsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'files',
    component: FilesComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'plans',
    component: PlansComponent,
    canActivate: [LoginGuard],
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
