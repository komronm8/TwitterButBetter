import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showPopup: Boolean = false
  tweets: any[] = []
    constructor() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      this.tweets = json
    });
  }
}
