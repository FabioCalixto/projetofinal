import {Component} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './default-layout.component.html'

})

export class DefaultLayoutComponent {
    public sidebarMinimized = false;
    
    constructor()
    {
        //console.log( this.authService.currentUser() )
    }




}


