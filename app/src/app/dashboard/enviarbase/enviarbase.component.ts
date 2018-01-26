import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../user.service';
import { UtilityService } from '../../utility.service';

@Component({
  selector: 'app-enviarbase',
  templateUrl: './enviarbase.component.html',
  styleUrls: ['./enviarbase.component.css']
})
export class EnviarbaseComponent implements OnInit {

  // private API_URL = "https://mylead-api.herokuapp.com";
  private API_URL = 'https://mylead-api.herokuapp.com';

  @ViewChild('inputFile') fileInput;

  constructor(private user:UserService) {}
  
    ngOnInit(){

    };

    private upload() {
      const fileBrowser = this.fileInput.nativeElement;
      if (fileBrowser.files && fileBrowser.files[0]) {
        const formData = new FormData();
        formData.append('inputFile', fileBrowser.files[0]);
        const xhr = new XMLHttpRequest();      
        xhr.open('POST', this.API_URL + '/upload', true);
        xhr.onload = function () {
          if (this['status'] === 200) {
              const responseText = this['responseText'];
              const files = JSON.parse(responseText);
              //todo: emit event
              alert("success");
          } else {
            //todo: error handling
            alert("error")
          }
        };
        xhr.send(formData);
      }
    }

}
