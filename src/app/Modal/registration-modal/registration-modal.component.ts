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
import { AuthService } from "../../Services/auth.service";

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
	isRegistrationMode: boolean = false;

	registrationForm: FormGroup;
	constructor(private fb: FormBuilder, private authService: AuthService) {
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
		const jsonBody = {
			name: this.registrationForm.value.name,
			email: this.registrationForm.value.email,
			password: this.registrationForm.value.password,
			confirmPassword: this.registrationForm.value.confirmPassword,
		};

		this.authService.userRegister(jsonBody).subscribe(
			(res: any) => {
				console.log("Registration successful:", res.message);
				this.switchMode();
			},
			(error) => {
				console.error("Error registering user:", error);
				// Optionally, display an error message to the user
			}
		);
		this.registrationForm.reset();
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

		const credentials = {
			email: this.loginForm.value.email,
			password: this.loginForm.value.password,
		};

		this.authService.userLogin(credentials).subscribe(
			(response: any) => {
				console.log("Login successful:", response.message);
				console.log("Login successful token:", response.token);
				// Optionally, save the token to local storage or session storage
				this.authService.saveToken(response.token);
				this.loginForm.reset();
				this.closeModal.emit();
				this.loginSuccess.emit();
			},
			(error) => {
				console.error("Login failed:", error);
			}
		);
	}

	switchMode() {
		// this.isRegistrationMode = !this.isRegistrationMode;
		this.isRegistrationMode = !this.isRegistrationMode;
	}
}
