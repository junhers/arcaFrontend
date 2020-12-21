import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Marchandise } from '../model/marchandise';
import { MarchandiseService } from '../service/marchandise.service';
import { Color, Label } from 'ng2-charts';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  marchandises: Marchandise[] = [];
  mappPaysRefValue = new Map();

  chartDateLabel: Label [] =[]
  chartSommeData: ChartDataSets[] = [] ;


  chartOptions = {
    responsive: true,
    type: 'line',
    scales:{
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "valeurs"
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: "temps"
        }
      }]


    },

    title: {
      display: true,
      text: "Somme des valeurs d'une journée en fonction du temps sur une période d'un an ",
     
    }
  };

 
constructor(private marchandiseService: MarchandiseService){}
 
  ngOnInit(): void {
   
    this.marchandiseService.findAll().subscribe( marchandise => {
      let dateFormattage  = {year: 'numeric', month: 'long', day: 'numeric' };
    
      this.marchandises = marchandise;
this.marchandises.forEach(marchandise => {

 this.mappPaysRefValue.set(new Date(parseInt((marchandise.date))).toLocaleDateString('fr', dateFormattage), 0)

}) 

for (let key of this.mappPaysRefValue.keys()) {
for(let i = 0; i<this.marchandises.length; i++ ){
  if(new Date(parseInt((this.marchandises[i].date))).toLocaleDateString('fr', dateFormattage)=== key) { 
    this.mappPaysRefValue.set(key, this.mappPaysRefValue.get(key) + this.marchandises[i].valeur); 
}       
}       
}
    for (let [key, value] of this.mappPaysRefValue) {
    this.chartDateLabel.push(key) 
    this.chartSommeData[0].data.push(value)  
  }
}); 

  } 

}
