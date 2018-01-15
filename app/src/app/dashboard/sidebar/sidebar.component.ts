import { Component, OnInit } from '@angular/core';
import { Session } from 'selenium-webdriver';
import { cleanSession } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { 

    function logout() {
    localStorage.clearAll();
    this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

}
