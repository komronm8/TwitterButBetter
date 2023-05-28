import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
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
