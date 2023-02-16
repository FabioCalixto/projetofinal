import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/views/auth/auth.service';

@Component({
    selector: 'app-navbar-side',
    templateUrl: './navbar-side.component.html',
    styleUrls: ['./navbar-side.component.scss']
})

export class NavbarSideComponent implements OnInit {
	isLoggedIn: boolean = sessionStorage.getItem('sessionToken')? true : false
	current_user: any

	constructor(
		private router: Router,
		private _authService: AuthService
	){
		this.current_user = this._authService.current_user()
	}

	ngOnInit(): void {
		if ( this.isLoggedIn ) {
			this.router.navigateByUrl('/dashboard')
		}
	}

	logOut(){
        this._authService.removeTokenOfUser()
    }

}
