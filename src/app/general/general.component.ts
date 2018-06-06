import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(private router: Router) { }
  public state = false;
  data = {
    user: null,
    pwd: null
  };
  ngOnInit() {
  }
  toggleLink() {
    $('#toggleMenu').slideToggle();
  }
  acordionDisplay() {
    $('.main__menu').slideToggle();
  }
  exitUser() {
    this.state = false;
    sessionStorage.removeItem('token');
    this.router.navigate(['Login']);
  }

}
