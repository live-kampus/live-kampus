
import { Component } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  submitted: boolean;

  constructor(private router: Router) { }

  authenticate() {
    this.submitted = true;
    console.log(' form ');
    // alert("form submitted");
    this.router.navigate(['user']);
    window.scrollTo(100, 100);

  }

  abc() {
    this.submitted = true;
  }


}
