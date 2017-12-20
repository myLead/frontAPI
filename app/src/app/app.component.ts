import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private API_URL = "https://mylead-api.herokuapp.com";
  title = 'MyLead';
  private formulario = {"nome": null, "cnpj": null, "email_usuario": null, "senha_usuario": null}
  private plano: number;
  private planoSelecionado: String


  private data3 =  {"email_usuario": "bruudn@gmail.com", 
  "nome": "RomiRomi", 
  "senha_usuario": "8888889"}
  

  constructor(private _http: Http) {} 


  private onSubmit(form){
    this.LoginAccount(this.data3);
    /*console.log(form.value);*/

    /*this._http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .map(res => res)
    .subscribe(dados => console.log(dados))*/
  }

  private onSubmitCadastro(form){

    form._directives.forEach(element => {
      switch (element.name) {
        case 'InputNome':
          this.formulario.nome = element.viewModel;
          break;
        case 'InputCnpj':
          this.formulario.cnpj = element.viewModel;
          break;
        case 'ImputEmail':
          this.formulario.email_usuario = element.viewModel;
          break;
        case 'InputSenha':
          this.formulario.senha_usuario = element.viewModel;
          break;
        default:
          break;
      }
    });

    this.createAccount(this.formulario);
    
  }

  private onClick(num){
    this.escolherPlano(num);
  }
  
  ngOnInit() {
  }

  private LoginAccount(data3) {
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
          if (result.json()) {
            if (result.json().status == "error") {
              alert(result.json().message)
            }else{
              alert(result.json().message)
              

              /* RESPONSE TO USER */


            }
          }
        },
        (error) => {
          reject(error.json())
        });
    });
  }

  private escolherPlano(plano){
    if (plano == 1){
      this.planoSelecionado = 'Plano Gold';
    }else{
      this.planoSelecionado = 'Plano Premium';
    }
  }

}
