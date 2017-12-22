import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  private API_URL = "https://mylead-api.herokuapp.com";
  title = 'MyLead';
  private formulario = {"nome": null, "cnpj": null, "email_usuario": null, "senha_usuario": null, "id_plano": null}
  private usuario = {"email_usuario": null, "senha_usuario": null}
  private planoSelecionado: Number
  
  constructor(private _http: Http) {} 

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

    this.formulario.id_plano = this.planoSelecionado;

    this.createAccount(this.formulario);
    
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
    this.planoSelecionado = plano
  }
 
  ngOnInit() {}
 
}