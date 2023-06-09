import { Component } from '@angular/core';
import { HttpService } from '../app/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  session: number = 0;
  sessionActive: boolean = false;

  constructor(private http: HttpService){

  }

  newPost(){
    //TODO: open new tab to github-page 
  }

  openMenu(){
    //TODO: make sidenav open over main content or minimize with only icons seen
  }

  // ngOnInit() {
  //   this.http.isSessionActive(this.session).subscribe(
  //     (response: { message: string }) => {
  //       if (response.message.startsWith('true')) {
  //         this.sessionActive = true;
  //       } else {
  //         this.sessionActive = false;
  //       }
  //     }
  //   );
  // }
}
