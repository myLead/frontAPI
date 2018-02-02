import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router, RouterModule} from '@angular/router';
import { Http } from '@angular/http';
import { NotificationsService } from 'angular2-notifications';
import { UtilityService } from '../../utility.service';
import { element } from 'protractor';
import { CookieService } from 'ngx-cookie-service';
import { Alert } from 'selenium-webdriver';
declare var $:any;

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})

export class ModalLoginComponent implements OnInit {
  cookieValue = 'UNKNOWN';
  dialog: any;
  private API_URL = "https://mylead-api.herokuapp.com";
  private formulario = {"email_usuario": null, "senha_usuario": null}
  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    showProgressBar: false,
    pauseOnHover: true,
    clickToClose: true
   
  }

  constructor(
    private cookieService: CookieService,
    private utility : UtilityService,
    private user:     UserService, 
    private router:   Router, 
    private _http:    Http,
    private _service: NotificationsService) { }
   

  ngOnInit():void {
    this.cookieService.set( 'Test', 'Hello World' );
    this.cookieValue = this.cookieService.get('Test');
    
   this.utility.islogged().then((result: boolean) => {
         if(result){ 
             this.router.navigate(['/dashboard']);
      }
  })
  

  
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
                  this._service.success('Sucesso', result.json().message);
                  this.user.setUserloggedIn();
                  if(typeof (Storage) !== 'undefined'){
                    sessionStorage.setItem(result.json().data.nome, result.json().data.id_usuario);
                    //var str = JSON.stringify(result.json());
                    //console.log(str);
                   
                  }
                  this.router.navigate(['/dashboard']);
                  $('#modalLogin').modal('toggle');
                  
                }else{
                  this._service.error('Erro', result.json().message);               
                  
                }
              }
            },
            (error) => {
              reject(error.json())
            });
        });
    }
    
}
