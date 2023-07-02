import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  @Input() tweet: any;
  @Input() currentUser: any;
  @Output() edit = new EventEmitter<any>();
  editPost() {
    this.edit.emit(this.tweet);
  }
  deletePost() {
    async function fetchRequest(url: string) {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage['jwt']}`,
        },
      });
      return response;
    }
    
    const api = `http://localhost:8080/api/v1/post/${this.tweet.id}`
    fetchRequest(api)
      .then((data) => {
        console.log(data)
        location.reload();
      })
      .catch((error) => {
        alert(error)
      });
  }
  isAuthor: Boolean = false
  isAdmin: Boolean = false
  constructor() {
  }
  ngOnInit() {
    this.isAuthor = this.tweet.user.id === this.currentUser.id
    this.isAdmin = this.currentUser.role === 'ADMIN'
  }
}
