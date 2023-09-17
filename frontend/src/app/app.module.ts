import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { FooterHomeComponent } from './components/footer-home/footer-home.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { OngoingComponent } from './components/ongoing/ongoing.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DashboardUserComponent } from './pages/UserDashboard/dashboard-user/dashboard-user.component';
import { DashboardAdminComponent } from './pages/AdminDashboard/dashboard-admin/dashboard-admin.component';
import { DashboardUserHomeComponent } from './pages/UserDashboard/dashboard-user-home/dashboard-user-home.component';
import { DashboardAdminHomeComponent } from './pages/AdminDashboard/dashboard-admin-home/dashboard-admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HomeSliderComponent,
    FooterHomeComponent,
    ComingSoonComponent,
    OngoingComponent,
    FooterComponent,
    DashboardUserComponent,
    DashboardAdminComponent,
    DashboardUserHomeComponent,
    DashboardAdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
