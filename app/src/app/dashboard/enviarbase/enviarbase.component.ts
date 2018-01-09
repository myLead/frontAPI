import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-enviarbase',
  templateUrl: './enviarbase.component.html',
  styleUrls: ['./enviarbase.component.css']
})
export class EnviarbaseComponent implements OnInit {

  @ViewChild('fileInput') fileInput;

  constructor(private user:UserService) {}
  
    ngOnInit(){

    };

    private upload() {
      const fileBrowser = this.fileInput.nativeElement;
      if (fileBrowser.files && fileBrowser.files[0]) {
        const formData = new FormData();
        formData.append('files', fileBrowser.files[0]);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/Data/UploadFiles', true);
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
