import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { HttpModule }             from '@angular/http';
import { FormsModule }            from '@angular/forms';

import { AppComponent }           from './app.component';
import { HomeComponent }          from './home/home.component';
import { DashboardComponent }     from './dashboard/dashboard/dashboard.component';
import { NavbarComponent }        from './defaults/navbar/navbar.component';

import { routing }                from './app.routing';
import { FooterComponent }        from './defaults/footer/footer.component';
import { ModalCadastroComponent } from './modals/modal-cadastro/modal-cadastro.component';
import { ModalLoginComponent }    from './modals/modal-login/modal-login.component';
import { Component, OnInit  } from '@angular/core';
import { AuthguardGuard } from './authguard.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService }         from './user.service';
import { SidebarComponent }    from './dashboard/sidebar/sidebar.component';
import { EnviarbaseComponent } from './dashboard/enviarbase/enviarbase.component';
import { Grafico1Component }   from './dashboard/grafico1/grafico1.component'
import { ChartsModule }        from 'ng2-charts';
import { Grafico2Component }   from './dashboard/grafico2/grafico2.component';
import { SimpleNotificationsModule } from 'angular2-notifications';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    ModalCadastroComponent,
    ModalLoginComponent,
    SidebarComponent,
    EnviarbaseComponent,
    Grafico1Component,
    Grafico2Component
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ChartsModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
