import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class ActorServiceService {

  constructor(private firestore:AngularFirestore) { }

  guardar() {
    const collection = this.firestore.collection('actores');
    collection.add({nombre: 'Ricardo', apellido: 'Darin'});
  }

  traer() {
    const collection = this.firestore.collection('actores');
    const result = collection.valueChanges();

    result.subscribe((docs) => {
      docs.forEach((doc) => {
        console.log(doc);
      });
    });
  }
}
