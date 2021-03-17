import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProyectosService } from 'src/app/services/proyectos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
proyecto = {
  nombre: '',
  descripcion:'',
  managerProyect:'',
  assignedTo:'',
  status:''
}
myDate = new Date();
  constructor( private Pservice: ProyectosService ) { 
               
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
      title: 'Project created',
      showConfirmButton: false,
      timer: 2000
    })
    this.proyecto = formulario.value;
  console.log(this.proyecto);
  this.Pservice.crearProyecto(this.proyecto);
  this.myDate;
  }else{
    Object.values( formulario.controls ).forEach( control => {
      control.markAllAsTouched();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The project could not be created!',
        footer: 'Check the form please, thanks you.'
      })
    })
  }
  }
  
}

