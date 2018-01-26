import { Component, OnInit } from '@angular/core';
import { Session } from 'selenium-webdriver';
import { cleanSession } from 'selenium-webdriver/safari';
import { UserService } from '../../user.service';
import { Router, RouterModule} from '@angular/router';
import { Http } from '@angular/http';
import { NotificationsService } from 'angular2-notifications';
import { UtilityService } from '../../utility.service';
import { element } from 'protractor';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private utility : UtilityService,
    private user:     UserService, 
    private router:   Router, 
    private _http:    Http,
    private _service: NotificationsService
  ) {}
  

  logout(){
    alert("Eu click");
    sessionStorage.clear();
    localStorage.removeItem('auth_token');
    this.utility.islogged(); 
    localStorage.clearAll();
    this.router.navigate(['/']);
  }
  ngOnInit() {
    
  }

}
