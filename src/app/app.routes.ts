import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'registro', loadChildren: () => import('./modulos/registro/registro.module').then(m => m.RegistroModule) },
    { path: 'tableros', loadChildren: () => import('./modulos/tableros/tableros.module').then(m => m.TablerosModule) }
];

export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });