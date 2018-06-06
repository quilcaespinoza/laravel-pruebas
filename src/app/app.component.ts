import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';
import {LoginService} from './shared/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Output() stateChange = new EventEmitter();

  constructor( private loginservice: LoginService ) {}
  data = {
    user: null,
    pwd: null
  };
  state = false;
  ngOnInit() {  }
  toggleLink() {
    $('#toggleMenu').slideToggle();
  }
  acordionDisplay() {
    $('.main__menu').slideToggle();
  }
  signup() {
    this.loginservice.signup(this.data)
      .subscribe( inf => {
        if (inf.internalStatus === 200) {
          sessionStorage.setItem('token', inf.token);
          // this.route.navigate(['DashBoard']);
          // this.state = true;
          // this.stateChange.emit({state: this.state});
        } else if (inf.internalStatus === 400) {
          console.log('No registrado');
        } else if (inf.internalStatus === 500) {
          console.log('No se permite datos vacios');
        }

      });
  }
  exitUser() {
    this.state = false;
    sessionStorage.removeItem('token');
    // this.router.navigate(['Login']);
  }

}
