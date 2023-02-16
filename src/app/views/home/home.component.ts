import { ApplicationService } from './../../api/application.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    apostas: any = []
    codigos: any = []

    

    constructor(
        private _applicationService: ApplicationService
    ) { }

    ngOnInit(): void {
        this.get_apostas()
        this.get_codigos()
    }

    get_apostas(){
        this._applicationService.get_apostas()
        .subscribe(
            response => {
                this.apostas = response.data
            },
            (error) => {
                if (!error.ok) {
                    console.log(error)
                }
            }
        )
    }

    get_codigos(){
        this._applicationService.get_codigos()
        .subscribe(
            response => {
                this.codigos = response.data
            },
            (error) => {
                if (!error.ok) {
                    console.log(error)
                }
            }
        )
    }

}
