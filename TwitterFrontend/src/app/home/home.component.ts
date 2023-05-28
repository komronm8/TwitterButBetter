import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tweet = {
    user: 'User',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium minima quae voluptatem eos quia odit quasi unde, sed hic dolorum nesciunt esse corrupti ducimus repellendus accusamus.Assumenda, aliquid officia',
  }
  tweets: any[] = []
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.tweets.push(this.tweet)
    }
  }
}
