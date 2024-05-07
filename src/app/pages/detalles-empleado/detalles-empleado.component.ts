import { Component, inject } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-empleado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles-empleado.component.html',
  styleUrl: './detalles-empleado.component.css'
})
export class DetallesEmpleadoComponent {

  servicios= inject( EmpleadosService )
  ruta = inject(ActivatedRoute)

  empleado:any
  id:any


  ngOnInit(){
   this.ruta.params.subscribe( p =>{
    this.id= p['idNosotros']

    this.servicios.getEmpleadoUnico(this.id).subscribe( e =>{
      this.empleado= e
    })


   })
  }

}
