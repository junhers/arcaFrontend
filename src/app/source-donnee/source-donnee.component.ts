import { Component, OnInit } from '@angular/core';
import { Marchandise } from '../model/marchandise';
import { MarchandiseService } from '../service/marchandise.service';

@Component({
  selector: 'app-source-donnee',
  templateUrl: './source-donnee.component.html',
  styleUrls: ['./source-donnee.component.css'],

})
export class SourceDonneeComponent implements OnInit {
  marchandises: Marchandise[] = [];
  mappPaysRefValue= new Map();

  constructor(private marchandiseService : MarchandiseService) { }

  ngOnInit(): void {

    this.marchandiseService.findAll().subscribe(data => {
      this.marchandises = data;
this.marchandises.forEach(marchandise => {
  this.mappPaysRefValue.set(marchandise.pays, 0)
})

for (let key of this.mappPaysRefValue.keys()) {
for(let i = 0; i<this.marchandises.length; i++ ){
  if(this.marchandises[i].pays=== key) { 
    this.mappPaysRefValue.set(key, this.mappPaysRefValue.get(key)+this.marchandises[i].valeur); 
}       
}       
}

});
 console.log(this.mappPaysRefValue)

  }   

}
