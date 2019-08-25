import { Injectable } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { GetDataService } from './get-data.service'

@Injectable({
  providedIn: 'root'
})
export class ParseDataService {

  constructor(private getData: GetDataService, private ngxXml2jsonService: NgxXml2jsonService) { }

  parseData(url: string) {
    const parser = new DOMParser();
    this.getData.getRemoteData(url).then(data => {
      let xml = parser.parseFromString(data.data, 'text/xml')
      const obj = this.ngxXml2jsonService.xmlToJson(xml);
      return obj;
    })
  }

}
