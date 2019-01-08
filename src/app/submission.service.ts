import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  constructor(private http: HttpClient) { }
  

  sendMessage(message:any): Observable<any> {
    return this.http.post("http://interview-contact-submit-api-lb-1009699934.us-east-1.elb.amazonaws.com/contact-us/send", message, httpOptions);
   
  } 
}
