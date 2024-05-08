import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonalService } from '../../services/personal.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  id:any;
  nombre: any;
  edad: any;
  genero: any

  python:any
  cpp:any

  servicio = inject(PersonalService)

  guardar( datos: any){
    console.log(datos.value);
    this.servicio.postPersonal(datos.value).subscribe()

    //recarga la página
    window.location.reload()

  }

}
