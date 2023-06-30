import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  @Input() tweet: any;
  @Input() isAuthor: Boolean | undefined;
  @Output() edit = new EventEmitter<any>();
  editPost() {
    this.edit.emit(this.tweet);
  }
  constructor() {
  }
}
