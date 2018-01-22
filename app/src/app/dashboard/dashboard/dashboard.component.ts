import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';


import {UserService} from '../../user.service';
import { UtilityService } from '../../utility.service';
import { Router } from '@angular/router';

declare var $:any;

@Component({
    selector: 'app-dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{

  constructor(private user:UserService, private utility : UtilityService, private router:   Router ) {
   
}
  
  
    ngOnInit():void{
        this.utility.islogged().then((result: boolean) => {
            if(result){ 
              this.router.navigate(['/dashboard']);
            }
        })
    };

}

