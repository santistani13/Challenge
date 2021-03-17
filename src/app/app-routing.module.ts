import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { EditarComponent } from './components/editar/editar.component';
import { ListasComponent } from './components/listas/listas.component';

const routes: Routes = [
  { path:'agregarProyecto', component: AgregarComponent },
  { path:'editarProyecto/:id', component: EditarComponent },
  { path:'misProyectos', component: ListasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'misProyectos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
