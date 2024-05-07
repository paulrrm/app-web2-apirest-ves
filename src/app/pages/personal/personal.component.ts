import { Component, inject } from '@angular/core';
import { PersonalService } from '../../services/personal.service';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { TablaComponent } from '../../components/tabla/tabla.component';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule, FormularioComponent, TablaComponent],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {

  servicio = inject(PersonalService)

  personal:any

  ngOnInit(){
    this.servicio.getPersonal().subscribe( p=>{
      this.personal = p
    } )
  }

}
