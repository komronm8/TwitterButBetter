import { Component,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-post-popup',
  templateUrl: './new-post-popup.component.html',
  styleUrls: ['./new-post-popup.component.css']
})
export class NewPostPopupComponent {
  @Input() type: 'create' | 'edit' = 'create';
  @Input() value: any = '';

  @Output() closePopup: EventEmitter<any> = new EventEmitter();
  close() {
    this.closePopup.emit();
  }
  handleSubmit() {
    if (this.type === 'create') {
      this.newTweet()
    } else if (this.type === 'edit') {
      this.editTweet()
    }
  }
  newTweet() {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement
    async function fetchRequest(url: string,data:String) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage['jwt']}`,
        },
        body: JSON.stringify({text:data}),
      });
      return response.json();
    }
    
    const api = 'http://localhost:8080/api/v1/post'
    fetchRequest(api,textarea.value)
      .then((data) => {
        console.log(data)
        location.reload();
      })
      .catch((error) => {
        alert(error)
      });
    this.close()
  }
  editTweet() {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement
    const editedPost = {
      id: this.value.id,
      text: textarea.value,
    }
    console.log(editedPost)
    async function fetchRequest(url: string,data: any) {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage['jwt']}`,
        },
        body: JSON.stringify(data),
      });
      return response;
    }
    
    const api = 'http://localhost:8080/api/v1/post/updatePost'
    fetchRequest(api,editedPost)
      .then((data) => {
        console.log(data)
        location.reload();
      })
      .catch((error) => {
        alert(error)
      });
    this.close()
  }
  ngOnInit() {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement
    textarea.textContent = this.value.text
  }
}
