import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard/dashboard.component';
import { HomeComponent }   from './home/home.component';
import{AuthguardGuard} from './authguard.guard';
import { EnviarbaseComponent } from './dashboard/enviarbase/enviarbase.component';

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
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTS);

