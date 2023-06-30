import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showPopup: Boolean = false
  popupType: 'create' | 'edit' = 'create'
  popupValue: any = ''
  edit(value: any) {
    console.log(value)
    this.popupType = 'edit'
    this.popupValue = value
    this.showPopup = true
  }
  openPopup() {
    this.showPopup = true
    this.popupType = 'create'
    this.popupValue = ''
}
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
