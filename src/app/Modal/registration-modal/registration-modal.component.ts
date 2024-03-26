import { Component, EventEmitter, Output } from "@angular/core";
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { DialogModule } from "primeng/dialog";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-registration-modal",
  standalone: true,
  imports: [CommonModule, DialogModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./registration-modal.component.html",
  styleUrl: "./registration-modal.component.css",
})
export class RegistrationModalComponent {
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  @Output() loginSuccess: EventEmitter<any> = new EventEmitter();

  loginForm: FormGroup;
  isRegistrationMode: boolean = true;

  registrationForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group(
      {
        name: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );

    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  get registrationFormControls() {
    return this.registrationForm.controls;
  }

  // Getter method to access form controls of the login form
  get loginFormControls() {
    return this.loginForm.controls;
  }

  registerUser() {
    if (this.registrationForm.invalid) {
      return;
    }

    // Implement your user registration logic here
    console.log("Registration Form Submitted");
    console.log("Name:", this.registrationForm.value.name);
    console.log("Email:", this.registrationForm.value.email);
    console.log("Password:", this.registrationForm.value.password);

    // Store user information in session storage
    sessionStorage.setItem("user", JSON.stringify(this.registrationForm.value));

    // Reset the form after submission
    this.registrationForm.reset();
    this.switchMode();
  }

  onCloseModal() {
    this.closeModal.emit();
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get("password")?.value;
    const confirmPassword = form.get("confirmPassword")?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  loginUser() {
    if (this.loginForm.invalid) {
      return;
    }

    // Retrieve user information from session storage
    const storedUser = sessionStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      const email = user.email;
      const password = user.password;

      // Validate user credentials
      if (
        email === this.loginForm.value.email &&
        password === this.loginForm.value.password
      ) {
        console.log("Login successful!");
        // Reset the form after successful login
        this.loginForm.reset();
        // Close the modal
        this.closeModal.emit();
        this.loginSuccess.emit();
        return;
      }
    }

    console.log("Invalid email or password");
  }

  switchMode() {
    this.isRegistrationMode = !this.isRegistrationMode;
  }
}
