import { ApplicationService } from './../../api/application.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    codigos: any = []

    check: any = {
        check_id: null,
        amount: null
    }

    check_card: any = null

    nova_aposta: any = {
        check_id: null,
        key: null
    }
    
    constructor(
        private router: Router,
        private _applicationService: ApplicationService
    ) { }

    ngOnInit(): void {
        this.get_codigos()
    }

    _solicitar(){
        this._applicationService.criar_check(this.check)
        .subscribe(
            response => {
                this.check_card = response.check_card
                this.nova_aposta.check_id = response.check_card.check_id
                this._applicationService.SwalSuccess('Check gerado com sucesso')
            },
            (error) => {
                if (!error.ok) {
                    console.log(error)
                }
            }
        )
    }

    _registar_aposta(){
        this._applicationService.registar_aposta(this.nova_aposta)
        .subscribe(
            response => {
                this._applicationService.SwalSuccess(response.message)
                this.router.navigateByUrl('/')
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
