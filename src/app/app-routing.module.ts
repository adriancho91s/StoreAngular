import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent} from './components/logout/logout.component';
import { ProductspageComponent} from './components/productspage/productspage.component';
import { RegisterComponent} from './components/register/register.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { SuccessfulPayComponent} from './components/successful-pay/successfulPay.component';
import { TokenGuard } from './guard/auth.guard';
import { TokenGuardAdmin } from './guard/admin.guard';
import { WelcomeComponent} from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductFormComponent } from './components/dashboard/product-form/product-form.component';
import { CombinedTokenGuard } from './guard/combinedLogin.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent, canActivate:[CombinedTokenGuard]},
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent, canActivate:[CombinedTokenGuard] },
  { path: 'products', component: ProductspageComponent },
  { path: 'products/:id', component: ProductPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent,   canActivate: [TokenGuardAdmin]},
  { path: 'dashboard/editar/:id', component: ProductFormComponent,  canActivate: [TokenGuardAdmin]}
  //{ path: 'paymentStatus/userId', canActivate: [TokenGuard,TokenGuardAdmin]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
