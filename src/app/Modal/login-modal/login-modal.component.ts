import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-login-modal",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./login-modal.component.html",
  styleUrl: "./login-modal.component.css",
})
export class LoginModalComponent {
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: [""],
      password: [""],
    });
  }
  get formControls() {
    return this.loginForm.controls;
  }

  onCloseModal() {
    this.closeModal.emit();
  }

  loginUser() {
    // Logic to login the user goes here
    console.log("Logging in user...");
  }
}
