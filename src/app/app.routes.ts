import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetallesEmpleadoComponent } from './pages/detalles-empleado/detalles-empleado.component';
import { DetallesPersonaComponent } from './pages/detalles-persona/detalles-persona.component';

export const routes: Routes = [
    { path: 'home', component:HomeComponent },
    { path: 'personal', component: PersonalComponent},
    { path: 'nosotros', component: NosotrosComponent},
    { path: 'nosotros/:idNosotros', component: DetallesEmpleadoComponent},
    { path: 'personal/:idPersonal', component: DetallesPersonaComponent},

    { path: '', redirectTo:'home', pathMatch:'full'},
    { path: '**', component:Error404Component}
];
