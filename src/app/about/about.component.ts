import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'เกี่ยวกับเรา';
  age: number;
  info = { email:'KS2Mo@gmail.com' };
  logo = './assets/images/watermelon.jpg';
  imgWidth = 200;
  users = ['Mo','Neung'];
  isShow = false;
  myColor = 'yellow';
  isActive = false;
  courses = [
    {name : 'php' ,price: 200},
    {name : 'nodejs' ,price: 200},
    {name : 'react' ,price: 200}
  ]
  constructor() {
    this.age = 10;
   }

  ngOnInit(){
    this.title = 'Kassarin Saraporn';
  }
  go(){
    this.isActive = true;
    this.imgWidth = 100;
    this.myColor = 'blue';

    //alert('Hello MoMo!');
    //logo = './assets/images/watermelon.jpg';
  }

}
