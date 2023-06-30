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
  newTweet() {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement
    console.log(textarea.value)
    this.close()
  }
  ngOnInit() {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement
    console.log(this.value)
    console.log(this.type)
    textarea.textContent = this.value.title
  }
}
