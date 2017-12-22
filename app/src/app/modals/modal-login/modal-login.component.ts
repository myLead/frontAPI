import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router, RouterModule} from '@angular/router';
import { Http } from '@angular/http';
declare var $:any;

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  dialog: any;
  private API_URL = "https://mylead-api.herokuapp.com";
  private formulario = {"email_usuario": null, "senha_usuario": null}


  constructor(private user: UserService, private router:Router, private _http: Http) { }

  ngOnInit() {
  }
 
  
  private onSubmitLogin(form){
    
        form._directives.forEach(element => {
          switch (element.name) {
            case 'loginEmail':
              this.formulario.email_usuario = element.viewModel;
              break;
            case 'loginSenha':
              this.formulario.senha_usuario = element.viewModel;
              break;
            default:
              break;
          }
        });

        this.LoginAccount(this.formulario);
        
      }

      private LoginAccount(usuario) {
        return new Promise((resolve, reject) => {
          this._http.post(this.API_URL + '/login', usuario)
            .subscribe((result: any) => {
              if (result.json()) {
                if (result.json().status == "success"){
                  alert(result.json().message)
                  this.user.setUserloggedIn();
                  this.router.navigate(['dashboard']);
                  $('#modalLogin').modal('toggle');

                }else{
                  alert(result.json().message)
                }
              }
            },
            (error) => {
              reject(error.json())
            });
        });
    }
 

}
