import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../Services/auth.service";

@Injectable({
	providedIn: "root",
})
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {}

	canActivate(): boolean {
		const token = this.authService.getToken();
		if (token) {
			console.log("gurd", token);
			return true;
		} else {
			console.log("gurd reject");
			// Unauthorize User
			return false;
		}
	}
}
