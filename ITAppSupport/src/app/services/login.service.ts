import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAuthenticated: boolean = false;
  roles: any;
  email: any;
  accesToken!: string;
  private apiUrl = 'http://localhost:8081/api/v1/auth/authenticate-admin';

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(this.apiUrl, body);
  }

  loadProfil(token: string) {
    console.log('Token data:', token); // Vérifiez le token reçu

    if (typeof token === 'string') {
      this.isAuthenticated = true;
      this.accesToken = token;

      // Décodage du JWT
      try {
        const decodedJwt: any = jwtDecode(this.accesToken);

        // Extraction de l'email
        this.email = decodedJwt.sub;

        this.roles = decodedJwt.roles || [];
      } catch (error) {
        console.error('JWT decoding failed:', error);
      }
    } else {
      console.error('Invalid token type:', typeof token);
    }
  }
}
