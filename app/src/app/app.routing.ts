import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard/dashboard.component';
import { HomeComponent }   from './home/home.component';
import{AuthguardGuard} from './authguard.guard';
import { EnviarbaseComponent } from './dashboard/enviarbase/enviarbase.component';
import {  Grafico1Component } from './dashboard/grafico1/grafico1.component';
import {  Grafico2Component } from './dashboard/grafico2/grafico2.component';
import { componentFactoryName } from '@angular/compiler';


const APP_ROUTS: Routes = [
   
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        //canActivate: [AuthguardGuard],
        component: DashboardComponent
    },
    {
        path: 'enviarbase',
        component: EnviarbaseComponent
    },
    {
        path: 'grafico1',
        component: Grafico1Component
    },
    {
        path: 'grafico2',
        component: Grafico2Component
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTS);

