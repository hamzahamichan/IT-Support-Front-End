import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  handleLogin(): void {
    if (this.formLogin.valid) {
      const email = this.formLogin.value.email;
      const pwd = this.formLogin.value.password;
      this.loginService.login(email, pwd).subscribe({
        next: data => {
          console.log('Login response data:', data); // Inspectez la réponse de l'API

          if (data && data.access_token) { // Correction ici
            this.loginService.loadProfil(data.access_token);
            this.router.navigateByUrl("/admin");
          } else {
            console.error('Invalid login response: No access-token found');
          }
        },
        error: err => {
          console.error('Login failed:', err); // Affichez les erreurs pour un diagnostic
        }
      });
    }
  }


}
