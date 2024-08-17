import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path:'login',
        loadComponent:()=>import('./components/login/login.component').then(m=>m.LoginComponent)
    },
    {
        path:'home',
        canActivate:[authGuard],
        loadComponent:()=>import('./components/home/home.component').then(m=>m.HomeComponent),
        children:[
            {
                path:'',
                loadComponent:()=>import('./components/default/default.component').then(m=>m.DefaultComponent)
            },
            {
                path:'orders',
                loadComponent:()=>import('./components/orders/orders.component').then(m=>m.OrdersComponent)
            },
            {
                path:'**',
                loadComponent:()=>import('./components/default/default.component').then(m=>m.DefaultComponent)
            }
        ]
    }
];
