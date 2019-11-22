import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmEqualValidatorDirective } from '../shared/confirm-equal-validator.directive';
import { AuthService } from '../auth.service';
 
@Component({
    selector: 'app-regist',
    templateUrl: './regist.component.html',
    styleUrls: ['./regist.component.css']
})
 
export class RegistComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
 
    constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) { }
 
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            repassword: ['', [Validators.required,Validators.minLength(6)]]
        });
    }
 

    get f() { return this.registerForm.controls; }


    onSubmit() {
        this.submitted = true;
 
        // stop the process here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        let username = this.f.username.value;
        let password = this.f.password.value;
        this.auth.register(username, password)
        
        this.router.navigate(['/homepage']);
    }
}