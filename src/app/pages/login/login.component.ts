import { Component, OnInit } from '@angular/core';
import { authService } from '@shared/service/auth.service';
import { usuario } from '@shared/model/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private usuario: usuario = new usuario();

  constructor(private authService: authService) { }

  ngOnInit() {
  }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }

}
