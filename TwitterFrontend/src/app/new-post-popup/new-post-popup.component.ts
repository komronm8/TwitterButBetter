import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-post-popup',
  templateUrl: './new-post-popup.component.html',
  styleUrls: ['./new-post-popup.component.css']
})
export class NewPostPopupComponent {
  @Output() closePopup: EventEmitter<any> = new EventEmitter();
  close() {
    this.closePopup.emit();
  }
  newTweet() {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement
    console.log(textarea.value)
    textarea.value = ''
  }
}
