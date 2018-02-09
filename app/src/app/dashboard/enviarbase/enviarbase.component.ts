import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { UserService } from '../../user.service';
import { UtilityService } from '../../utility.service';
import { Resultados } from './resultados'
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Observable } from 'rxjs/Observable';
import { GraficosService } from '../grafico.service';

@Component({
  selector: 'app-enviarbase',
  templateUrl: './enviarbase.component.html',
  styleUrls: ['./enviarbase.component.css']
})
@Injectable()
export class EnviarbaseComponent implements OnInit {

  resultado: object[] = [];

  private API_URL = "https://mylead-api.herokuapp.com";
  // private API_URL = 'http://127.0.0.1:5000';
  //private _Url = 'http://mylead-api.herokuapp.com/teste/id';
  private _Url = 'http://mylead-api.herokuapp.com/resultado/2';

  @ViewChild('inputFile') fileInput;

  constructor(private user:UserService, private _http: Http, private grafico: GraficosService) {  }
  
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

    private getResultados() {
      //console.log(this.resultado);
      //return this._http.get(this._Url)
          //.map((response: Response) => <Resultados>response.json().data)
          //.subscribe(data => this.resultado.push(data))
          //.catch(this.handleError);
    }
    private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }
    private exibir(){
      console.log(this.resultado);
    }

    //RESULTADO DA API
    private getResultadosAPI() {
      //console.log(this.resultado);
      return this._http.get(this._Url)
          .map((response: Response) => <Resultados>response.json().data)
          .subscribe(data => this.grafico.setArrayDados(data))
          //.catch(this.handleError);
    }


    //console.log('All: ' + JSON.stringify(data))

}
