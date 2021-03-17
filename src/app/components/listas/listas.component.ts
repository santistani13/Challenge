import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectosService } from 'src/app/services/proyectos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {
proyecto: any [] = [];


myDate = new Date();
  constructor( private router: Router,
               private Pservice: ProyectosService ) {
                 this.proyecto = this.Pservice.proyecto
                }

  ngOnInit(): void {
  }

  agregarProyecto(){
    this.router.navigate( ['agregarProyecto'] );
  }
  borrarProyecto(i:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.proyecto.splice(i, 1);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
   
  }
  editarProyecto(idx: number){
    this.router.navigate(['/editarProyecto', idx] );
  }
}
