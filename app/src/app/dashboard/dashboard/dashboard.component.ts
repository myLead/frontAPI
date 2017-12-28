import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {UserService} from '../../user.service';
declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{

  constructor(private user:UserService) {}
  
    ngOnInit(){

    };

}

