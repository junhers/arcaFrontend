import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BatchService } from '../service/batch.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  bacthStatus: string;
  hide: boolean = true;
  success: string
  affichageDonnee: string



  constructor(private batchService: BatchService, private router: Router) { 

  }

  ngOnInit(): void {
  
    this.batchService.barProgression().subscribe( data => {

      this.bacthStatus = data;
      if(this.bacthStatus === "COMPLETED") {
        this.affichageDonnee = "Les données demandées vont être affichées"
        this.success = "Chargement du batch terminé !" + " " + this.affichageDonnee;
        this.hide = false
        
       setTimeout(()=> { this.hide = true}, 3000);
       setTimeout(()=>  this.router.navigate(['source']), 4000);
       

      } else {
      
        this.router.navigate(['error'])
        
      }
     
  
      console.log(this.bacthStatus) ;
    });
  }

     







  
/**
 * 
 * 
 * MOYEN
 * 
 this.batchService.batchStatus().subscribe((event: HttpEvent<any>)=> {
    
      console.log("type evenement: " + event.type)
 if(event.type === HttpEventType.DownloadProgress || event.type === HttpEventType.UploadProgress){
   console.log("trueuuuuuuuuuuuuuu")

    console.error("loaded" + event.loaded)
    console.error("total" + event.total)
        console.error('yeaaahhhhhhhhhhhhhhhhhhhhh')
        this.progression = Math.round((100 * event.loaded )/ event.total);
       // this.progression = this.progression + this.incr;
        console.log(`Uploaded! ${this.progression}%`);
        console.error( "progression" + this.progression);
      }
      
     console.warn(event)

    })
 */




  }
  
    








// this.subPleas = this.batch
      //this.width = this.batch;