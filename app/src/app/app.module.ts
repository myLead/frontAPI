import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { HttpModule }             from '@angular/http';
import { FormsModule }            from '@angular/forms';

import { AppComponent }           from './app.component';
import { HomeComponent }          from './home/home.component';
import { DashboardComponent }     from './dashboard/dashboard.component';
import { NavbarComponent }        from './defaults/navbar/navbar.component';

import { routing }                from './app.routing';
import { FooterComponent }        from './defaults/footer/footer.component';
import { ModalCadastroComponent } from './modals/modal-cadastro/modal-cadastro.component';
import { ModalLoginComponent }    from './modals/modal-login/modal-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    ModalCadastroComponent,
    ModalLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
