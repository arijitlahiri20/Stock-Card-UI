import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    //setTimeout(() => { this.router.navigate(['mainpage']);}, 5000);

    //this.router.navigate(['mainpage']);
  }
  /*Button(){
    this.router.navigate(['mainpage']);
  }*/

 

}
