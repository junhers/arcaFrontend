import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marchandise } from '../model/marchandise';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  private batchUrl : string;


  constructor(private http:  HttpClient) { 
    this.batchUrl = 'http://localhost:8080/loadBatch';
  }

  public barProgression() : Observable<any>{
    return this.http.get<any>(this.batchUrl);
  }

}