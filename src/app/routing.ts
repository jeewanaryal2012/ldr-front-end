
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginRegisterComponent } from './components/public/login-register/login-register.component';

// All Routes
const routes: Routes = [
    { path: 'landing', component: LandingPageComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login-register', component: LoginRegisterComponent }
];


export class AppRoutes {
    static getRoutes() {
        return routes;
    }
}