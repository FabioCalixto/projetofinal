import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import Swal  from 'sweetalert2'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ApplicationService {

    constructor(
        private _client: HttpClient,
    ) {}


    // ===========================================================================================
    // ===================================== PERMISSIONS =========================================

    get_apostas(){
        return this._client.get<any>(`${environment.GRPC_API}/todas_apostas`)
    }

    get_codigos(){
        return this._client.get<any>(`${environment.GRPC_API}/codigos`)
    }

    criar_check(check: any){
        return this._client.get<any>(`${environment.REST_API}/check/${check.check_id}/amount/${check.amount}`)
    }

    registar_aposta(aposta: any){
        return this._client.post<any>(
            `${environment.GRPC_API}/register`,
            aposta
        )
    }

    SwalSuccess(title: string){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: title,
            showConfirmButton: false,
            timer: 500000000
        })
    }
    
}
