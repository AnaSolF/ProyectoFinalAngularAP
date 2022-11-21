import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importamos las rutas 
import { SobreMiComponent } from './sobre-mi/sobre-mi.component'
import { ProyectosComponent } from './proyectos/proyectos.component'
import { HardSoftComponent } from './hard-soft/hard-soft.component'
import { EducacionComponent } from './educacion/educacion.component'
import { ContactoComponent } from './contacto/contacto.component'

const routes: Routes = [
  {path: 'sobre-mi', component: SobreMiComponent},
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'hard-soft', component: HardSoftComponent },
  { path: 'educacion', component: EducacionComponent },
  {path: 'contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
