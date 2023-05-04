import { Component } from '@angular/core';
import { ActorServiceService } from 'src/app/services/actor-service.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent {

  constructor(private actorService:ActorServiceService) { }

  guardar() {
    this.actorService.guardar();
  }
}
