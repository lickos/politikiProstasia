import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getRemoteData(url: string): Observable<any> {
    console.log("getData")
    return this.http.get(url)
  }
}
