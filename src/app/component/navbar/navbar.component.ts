import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  openMail() {
    window.location.href = 'mailto:enricogasparri1976@gmail.com';
  }

}
