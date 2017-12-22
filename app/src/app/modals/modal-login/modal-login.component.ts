import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router, RouterModule} from '@angular/router';
@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  constructor(private user: UserService, private router:Router) { }

  ngOnInit() {
  }
 
  longinUser() {
    alert('oiwe');
  /*  e.preventDefault;
    console.log(e);
    var email = e.target.elements[0].value;
    var senha = e.target.elements[1].value;
    
    
    if (email == 'admin@hotmail.com' && senha == 'admin'){
      this.user.setUserloggedIn();
      this.router.navigate(['/dashboard'])
    }
    
   /* console.log(email, senha);
    return false;*/
  }

}
