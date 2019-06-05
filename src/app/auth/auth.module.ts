import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import {AuthService} from '../services/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { TokenInterceptor} from './shared/token.interceptor';
import {environment} from '../../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent} //, canActivate: [AuthGuard]
]


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
  ],

})
export class AuthModule { }
