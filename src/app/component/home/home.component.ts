import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  sendEmail(event: Event) {
    event.preventDefault();  // Previene il comportamento di submit del form

    const form = event.target as HTMLFormElement;

    // Recupera i valori dei campi dal form
    const name = (form.querySelector('#name') as HTMLInputElement).value;
    const email = (form.querySelector('#email') as HTMLInputElement).value;
    const message = (form.querySelector('#message') as HTMLTextAreaElement).value;

    // Costruisce il link mailto
    const mailtoLink = `mailto:enricogasparri1976@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;

    // Apre il client di posta elettronica
    window.location.href = mailtoLink;
  }
}
