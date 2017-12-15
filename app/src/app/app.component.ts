import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Usuario } from './Usuario';
import { UsuarioService } from './app.service';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  onSubmit(form){
    
    /*console.log(form.value);*/

    /*this._http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .map(res => res)
    .subscribe(dados => console.log(dados))*/
  }
  
  ngOnInit() {
  }

  /*selectTempo(texto){
    if (texto == "trimestral") {
      document.getElementById('precoPlanoGold').innerHTML = 'RS 39';
      // code...
    }
    if (texto == "semestral") {
      document.getElementById('precoPlanoGold').innerHTML = 'RS 59';
    }
    if (texto == "anual") {
      document.getElementById('precoPlanoGold').innerHTML = 'RS 79';
    }
  }*/

  
	usuario: Usuario;
  title = 'MyLead';
  data: any = null;
  data3 =  {"email_usuario": "bruudn@gmail.com", 
  "nome": "RomiRomi", 
  "senha_usuario": "888888"}
  data2= {"email": "sydney@fife","password": "pistol"};
  /*private API_URL = "https://reqres.in/api"*/
  private API_URL = "https://mylead-api.herokuapp.com"

  constructor(private _http: Http) {
    /*this.getMyBlog();*/
    this.createAccount(this.data3);
    }
  private getMyBlog() {
      return this._http.get(this.API_URL + '/user')
                  .map((res: Response) => res.json())
                   .subscribe(data => {
                          this.data = data.data;
                          console.log(this.data);
                  });
    }


  private  createAccount(data3) {
      return new Promise((resolve, reject) => {
        this._http.post('https://mylead-api.herokuapp.com/login', data3)
          .subscribe((result: any) => {
            console.log(result)
            resolve(result.json())
          },
          (error) => {
            reject(error.json())
          });
      });
  }

}
