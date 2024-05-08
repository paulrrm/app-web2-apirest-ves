import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonalService } from '../../services/personal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-persona',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detalles-persona.component.html',
  styleUrl: './detalles-persona.component.css'
})
export class DetallesPersonaComponent {

  id:any;
  nombre: any;
  edad: any;
  genero: any

  python:any
  cpp:any

  servicio= inject(PersonalService)
  router = inject(Router)
  ruta= inject(ActivatedRoute)

  ngOnInit(){
    
  }


  editar( datos:any){
    this.servicio.putNosotros(datos.value).subscribe()
    this.router.navigateByUrl("personal")
  }

}
