import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'login',
        loadComponent:()=>import('./login/login.component').then(m=>m.LoginComponent)
    },
    {
        path:'home',
        loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent),
        children:[
            {
                path:'',
                loadComponent:()=>import('./default/default.component').then(m=>m.DefaultComponent)
            }
        ]
    }
];
