import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

declare const google: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
    this.initMap();
  }

  submitContactForm(contactForm: NgForm) {
    console.log(contactForm.value);
    contactForm.resetForm();
  }

  initMap(): void {
    const location = { lat: 22.4316862, lng: 87.3057363 };
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: location,
        zoom: 15,
      }
    );

    new google.maps.Marker({ position: location, map: map });
  }
}
