import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'body',
    template: '<router-outlet></router-outlet>'
})

export class AppComponent {

    constructor(){}

    ngOnInit() {

    }

}
