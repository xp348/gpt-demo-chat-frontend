import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AuthService } from '../../core/api/api/auth.service';
import { Store } from '@ngrx/store';
import { writeDown } from '../../core/store/auth_token/auth_token.actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  isLoading = false;
  login = new FormControl<string | null>('johndoe', [Validators.required]);
  password = new FormControl<string | null>('secret', [Validators.required]);
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private store: Store
  ) {}

  getToken() {
    this.login.markAsTouched();
    this.password.markAsTouched();
    if (!this.login.value || !this.password.value) return;
    this.isLoading = true;
    this.authService
      .loginForAccessTokenAuthTokenPost(this.login.value, this.password.value)
      .subscribe(
        (res) => {
          this.store.dispatch(writeDown({ token: res.access_token }));
          this.router.navigate([``]);
        },
        undefined,
        () => {
          this.isLoading = false;
        }
      );
  }
}
