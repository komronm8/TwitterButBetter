import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
  user: any 
  constructor(private router: Router) {
    if (localStorage['jwt']) {
      async function fetchRequest(url: string) {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage['jwt']}`,
          },
        });
        return response.json();
      }
      
      const api = 'http://localhost:8080/api/v1/user'
      fetchRequest(api)
        .then((data) => {
          console.log(data)
          this.user = data
        }).then(() => {
          getAllPosts(this)
        }
        )
        .catch((error) => {
          alert(error)
        });
      
      function getAllPosts(ng: any) {
        fetchRequest(`http://localhost:8080/api/v1/post`)
        .then((data) => {
          console.log(data)
          ng.tweets = data
        })
        .catch((error) => {
          alert(error)
        });
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
}
