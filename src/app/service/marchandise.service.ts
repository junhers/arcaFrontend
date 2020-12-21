import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marchandise } from '../model/marchandise';

@Injectable({
  providedIn: 'root'
})
export class MarchandiseService {
  private marchandiseUrl : string;


  constructor(private http:  HttpClient) { 
    this.marchandiseUrl = 'http://localhost:8080/marchandises';
  }


  public findAll(): Observable<Marchandise[]> {
    return this.http.get<Marchandise[]>(this.marchandiseUrl);
      
    // test
    
   // return this.http.get<Marchandise[]>(this.marchandiseUrl, { reportProgress: true, observe:'events'});


  }
}