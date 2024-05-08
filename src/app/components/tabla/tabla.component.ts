import { Component, inject } from '@angular/core';
import { PersonalService } from '../../services/personal.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  servicio = inject(PersonalService)

  personas : any;

  ngOnInit(){
    this.servicio.getPersonal().subscribe( p =>{
      this.personas = p
    } )
  }

  eliminar(id:any){
    this.servicio.deletePersonsID(id).subscribe()
    window.location.reload()
  }


}
