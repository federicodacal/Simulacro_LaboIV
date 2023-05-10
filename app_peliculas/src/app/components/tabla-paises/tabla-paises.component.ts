import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {

  @Output() PasarPais:EventEmitter<any> = new EventEmitter<any>();

  paises:any;

  constructor(private paisesService:PaisesService) {
    this.paises = [];
  }

  ngOnInit():void { 
    this.paisesService.obtenerPaises().subscribe((val:any) => {
      for(let item of val){
        this.paises.push(item);
      }
    });
  }

  enviarPais(pais:any) {
    this.PasarPais.emit(pais);
  }

}
