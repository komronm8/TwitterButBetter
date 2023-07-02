import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
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
  logOut() {
    localStorage.removeItem('jwt')
    this.router.navigate(['/login']);
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
          getUserPosts(this)
        }
        )
        .catch((error) => {
          alert(error)
        });
      
      function getUserPosts(ng: any) {
        fetchRequest(`http://localhost:8080/api/v1/post/${ng.user.id}`)
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
