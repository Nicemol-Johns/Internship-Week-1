import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardUserComponent } from './pages/UserDashboard/dashboard-user/dashboard-user.component';
import { DashboardAdminComponent } from './pages/AdminDashboard/dashboard-admin/dashboard-admin.component';
import { DashboardUserHomeComponent } from './pages/UserDashboard/dashboard-user-home/dashboard-user-home.component';
import { DashboardAdminHomeComponent } from './pages/AdminDashboard/dashboard-admin-home/dashboard-admin-home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'user',component:DashboardUserComponent,
  children:[
    {path:'',redirectTo:'dashboardUserHome',pathMatch:"full"},
    {path:'dashboardUserHome',component:DashboardUserHomeComponent}
  ]
  },
  {path:'admin',component:DashboardAdminComponent,
  children:[
    {path:'',redirectTo:'dashboardAdminHome',pathMatch:"full"},
    {path:'dashboardAdminHome',component:DashboardAdminHomeComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
