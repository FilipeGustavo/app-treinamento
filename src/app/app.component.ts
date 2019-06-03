import { Component, OnInit } from '@angular/core';
import { authService } from '@shared/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-treinamento';

  mostrarMenu: boolean = false;

  constructor(private authService: authService, private router: Router) {

  }

  ngOnInit() {
    /* this.authService.mostrarMenuEmitter.subscribe(
      res => { this.mostrarMenu = res;
        if (this.mostrarMenu === false) {
          this.router.navigate(['/login']);
        }
      }
    ); */
    this.mostrarMenu = true;
  }
}
