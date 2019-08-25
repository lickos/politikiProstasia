import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HTTP) { }

  getRemoteData(url: string) {
    return this.http.get(url, {}, {})
  }
}
