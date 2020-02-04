import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.page.html',
  styleUrls: ['./login-usuario.page.scss'],
})
export class LoginUsuarioPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin()
  {
    this.authService.login(this.email, this.password).then(res => [
        this.router.navigate(['/menu-usuario'])
    ]).catch(err => alert('Los datos son incorrectos'));
  }
  irARegistro(){
    this.router.navigate(['/registro-usuario'])
  }
}
