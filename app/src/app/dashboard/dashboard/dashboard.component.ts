import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';


import {UserService} from '../../user.service';
import { UtilityService } from '../../utility.service';
import { Router } from '@angular/router';
import { GraficosService } from '../grafico.service';

declare var $:any;

@Component({
    selector: 'app-dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
    private qtdLead: number
    private qtdCliente: number
    private qtdSuperlead: number

    constructor(
      private user: UserService,
      private utility: UtilityService, 
      private router: Router,
      private grafico: GraficosService
    ) {}
  
  
    ngOnInit():void{
        this.utility.islogged().then((result: boolean) => {
            if(result){ 
              this.router.navigate(['/dashboard']);
            }
        })

        this.setarCards();
    };

    setarCards(){
        if (this.grafico.getValidacao() == true){
            this.qtdLead = this.grafico.getArrayDados()[0]["Qtde_Leads"];
            this.qtdCliente = this.grafico.getArrayDados()[0]["Qtde_Clientes"];
            this.qtdSuperlead = this.grafico.getArrayDados()[0]["Qtde_Superleads"];
        } else{
            this.qtdLead = 0;
            this.qtdCliente = 0;
            this.qtdSuperlead = 0;
        }
    }

}

