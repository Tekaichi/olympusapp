﻿import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { Alert, AlertType } from './alert.model';
import { AlertService } from './alert.service';
import { AuthService } from '../auth.service';

@Component({ selector: 'alert', templateUrl: 'alert.component.html', styleUrls: ['./alert.component.css'] })
export class AlertComponent implements OnInit, OnDestroy {
    @Input() id: string;

    alerts: Alert[] = [];
    subscription: Subscription;

    constructor(private alertService: AlertService,private authService: AuthService) { }

    ngOnInit() {
        this.subscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
                if (!alert.message) {
                    // clear alerts when an empty alert is received
                    this.alerts = [];
                    return;
                }

                // add alert to array

                if(this.authService.currentUser != null){
                this.alerts.push(alert);
                if (this.alerts.length > 7)
                    this.alerts.shift();
                setTimeout(() => {
                    this.alerts.shift();
                }, 9000);
            }
            });
    }

    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.subscription.unsubscribe();
    }

    removeAlert(alert: Alert) {
        // remove specified alert from array
        this.alerts = this.alerts.filter(x => x !== alert);

    }

    cssClass(alert: Alert) {
        if (!alert) {
            return;
        }

        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    }
}