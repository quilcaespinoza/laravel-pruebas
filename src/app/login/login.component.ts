import { Component, OnInit } from '@angular/core';
import {LoginService} from '../shared/login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginservice: LoginService, private  route: Router) { }
  data = {
    user: null,
    pwd: null
  };
  ngOnInit() {
  }
  signup() {
    this.loginservice.signup(this.data)
      .subscribe( inf => {
        if (inf.internalStatus === 200) {
          sessionStorage.setItem('token', inf.token);
          this.route.navigate(['DashBoard']);
          // this.state = true;
          // this.stateChange.emit({state: this.state});
        } else if (inf.internalStatus === 400) {
          console.log('No registrado');
        } else if (inf.internalStatus === 500) {
          console.log('No se permite datos vacios');
        }

      });
  }
}
