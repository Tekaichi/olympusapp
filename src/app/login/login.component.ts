import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder,  ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';



@Component({ 
  selector:'app-login',
  templateUrl: './login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router : Router
     
      
    ) {
       
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

    

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        let username = this.f.username.value;
        let password = this.f.password.value;
       if(username == "user1" && password == "password"){
           console.log("logged");
           this.router.navigate(['/homepage']);
       }else{
           this.router.navigate(['/login'])
       }
    }
}