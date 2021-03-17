import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  proyecto : any [] = []; 
  constructor() { }

  crearProyecto(proyecto:any){
    this.proyecto.push(proyecto);
    console.log(this.proyecto);
  }
  editarProyecto(idx: number, proyecto:any){
    this.proyecto[idx] = proyecto
  }

  getProyectos(){
    return this.proyecto;
  }
  getProyecto(idx: number ){
    return this.proyecto[idx];
  }

}
