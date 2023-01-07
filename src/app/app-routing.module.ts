import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importamos las rutas
import { SobreMiComponent } from './sobre-mi/sobre-mi.component'
import { ProyectosComponent } from './proyectos/proyectos.component'
import { HardSoftComponent } from './hard-soft/hard-soft.component'
import { EducacionComponent } from './educacion/educacion.component'
import { ContactoComponent } from './contacto/contacto.component'
import { NavComponent } from './nav/nav.component'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
  { path: 'app-component', component: AppComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'hard-soft', component: HardSoftComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'nav', component: NavComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
