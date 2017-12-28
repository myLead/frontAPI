import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-enviarbase',
  templateUrl: './enviarbase.component.html',
  styleUrls: ['./enviarbase.component.css']
})
export class EnviarbaseComponent implements OnInit {

  constructor(private user:UserService) {}
  
    ngOnInit(){

    };

}
