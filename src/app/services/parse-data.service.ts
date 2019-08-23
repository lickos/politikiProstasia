import { Injectable } from '@angular/core';
import * as xml2js from 'xml2js';
import { GetDataService } from './get-data.service'

@Injectable({
  providedIn: 'root'
})
export class ParseDataService {

  constructor(private getData: GetDataService) { }

  parseData() {
    console.log("Parse Data")
    let parser = new xml2js.Parser();
    this.getData.getRemoteData('https://www.civilprotection.gr/el/rss.xml').subscribe(data => {
      xml2js.readFile(data, function (err, data) {
        parser.parseString(data, function (err, result) {
          console.dir(result);
          console.log('Done');
        })
      })
    })
  }

}
