import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService } from 'src/app/services/proyectos.service';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  proyecto = {
    nombre: '',
    descripcion:'',
    managerProyect:'',
    assignedTo:'',
    status:''
  }
  proyectoId : number = 0;
myDate = new Date();
  constructor( private Pservice : ProyectosService,
               private activatedRoute: ActivatedRoute) {
                this.activatedRoute.params.subscribe( params => {
                  this.proyecto = this.Pservice.getProyecto( params ['id'])
                this.proyectoId = params ['id'];
    
   });
  }

  ngOnInit(): void {
  }
 
  guardar( formulario: NgForm){
    if ( formulario.invalid ){
      Object.values( formulario.controls ).forEach( control => {
        control.markAllAsTouched();
      })
    }
  }
  confirmarFormulario(formulario: NgForm ){
    if (formulario.valid){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Project updated',
        showConfirmButton: false,
        timer: 2000
      })
      this.proyecto = formulario.value;
    console.log(this.proyecto);
    this.Pservice.editarProyecto( this.proyectoId , this.proyecto);
    this.myDate;
    }else{
      Object.values( formulario.controls ).forEach( control => {
        control.markAllAsTouched();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'The project could not be updated!',
          footer: 'Check the form please, thanks you.'
        })
      })
    }
    }
}
