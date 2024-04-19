import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { POSTurl } from "../config";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(private http: HttpClient) {}

	userRegister(data: any) {
		return this.http.post(POSTurl.register, data);
	}

	userLogin(data: any) {
		return this.http.post(POSTurl.login, data);
	}

	saveToken(token: string): void {
		sessionStorage.setItem("token", token);
	}

	getToken() {
		if (typeof sessionStorage !== "undefined") {
			return sessionStorage.getItem("token");
		} else {
			return null;
		}
	}

	getUserDetails(): string | null {
		const token = this.getToken();
		if (token) {
			const tokenPayload = JSON.parse(atob(token.split(".")[1]));
			// console.log(tokenPayload);
			return tokenPayload;
		}
		return null;
	}
}
