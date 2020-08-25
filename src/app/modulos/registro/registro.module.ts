import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';



@NgModule({
  declarations: [RegistroComponent, SignupComponent, LoginComponent, PasswordRecoveryComponent],
  imports: [
    CommonModule
  ]
})
export class RegistroModule { }
