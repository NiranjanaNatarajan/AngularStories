import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  error = '';
  @Input() headerName = 'Login Form'
  loginForm: FormGroup | any;
  constructor(
    // private formBuilder: FormBuilder,
    // private route: ActivatedRoute,
    private router: Router,
    // private authenticationService: AuthenticationService
  ) {
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  loginSubmit(data1: any) {
    this.submitted = true;
    this.loading = true;
    // this.authenticationService.login(data1.username, data1.psw)
    //   .pipe(first())
    //   .subscribe(
    //     (data: any) => {
          this.router.navigate(['/dashboard']);
        // },
        // (error: any) => {
        //   this.error = error;
        //   this.loading = false;
        // });
  }
}
