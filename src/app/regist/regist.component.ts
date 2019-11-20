import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmEqualValidatorDirective } from '../shared/confirm-equal-validator.directive';
 
@Component({
    selector: 'app-regist',
    templateUrl: './regist.component.html',
    styleUrls: ['./regist.component.css']
})
 
export class RegistComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
 
    constructor(private formBuilder: FormBuilder, private router: Router) { }
 
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            repassword: ['', [Validators.required,Validators.minLength(6)]]
        });
    }
 
    onSubmit() {
        this.submitted = true;
 
        // stop the process here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
 
        this.router.navigate(['/homepage']);
    }
}