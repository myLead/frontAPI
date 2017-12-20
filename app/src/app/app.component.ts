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
    this.LoginAccount(this.data3);
    /*console.log(form.value);*/

    /*this._http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .map(res => res)
    .subscribe(dados => console.log(dados))*/
  }

  onSubmitCadastro(form){
    /*console.log(form.value);
    this.formulario.nome = form.InputNome.value;
    this.formulario.cnpj = form.InputCnpj;
    this.formulario.email_usuario = form.InputEmail;
    this.formulario.senha_usuario = form.InputSenha;
    console.log(this.formulario);*/
    this.createAccount(this.teste);
    
  }

  onClick(num){
    this.escolherPlano(num);
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

  title = 'MyLead';
  data: any = null;
  data3 =  {"email_usuario": "bruudn@gmail.com", 
  "nome": "RomiRomi", 
  "senha_usuario": "8888889"}
  formulario = {"nome": null, "cnpj": null, "email_usuario": null, "senha_usuario": null}
  teste = {"nome": "antonio", "cnpj": "147852369852", "email_usuario": "antonio@antonio.com", "senha_usuario": "123456"}
  private API_URL = "https://mylead-api.herokuapp.com";
  plano: number;
  planoSelecionado: String

  constructor(private _http: Http) {
  
    } 


  private  LoginAccount(data3) {
      return new Promise((resolve, reject) => {
        this._http.post(this.API_URL + '/login', data3)
          .subscribe((result: any) => {
            console.log(result)
            resolve(result.json())
          },
          (error) => {
            reject(error.json())
          });
      });
  }

  private createAccount(dados) {
    return new Promise((resolve, reject) => {
      this._http.post(this.API_URL + '/user', dados)
        .subscribe((result: any) => {
          console.log(result)
          resolve(result.json())
        },
        (error) => {
          reject(error.json())
        });
    });
  }

  private buscarUsuario(email){
    
  }

  escolherPlano(plano){
    if (plano == 1){
      this.planoSelecionado = 'Plano Gold';
    }else{
      this.planoSelecionado = 'Plano Premium';
    }
  }

}
