import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { GetDataService } from './../services/get-data.service';
import xml2js from 'xml2js';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  weather: any = {};

  constructor(private getData: GetDataService, private ngxXml2jsonService: NgxXml2jsonService) { }

  ngOnInit() {
    this.getData.getRemoteData('https://www.meteoalarm.eu/documents/rss/gr.rss').then(data => {
      this.parseXml(data.data).then(data => {
        this.weather = data;
        let description: string = this.weather['description'];
        let divForDescription = document.getElementById('weatherDescription');
        divForDescription.innerHTML = description;
        console.log(this.weather)
      })
    })
  }

  parseXml(data: any) {
    return new Promise(resolve => {
      var parser = new xml2js.Parser(
        {
          trim: true,
          explicitArray: true
        });

      parser.parseString(data, function (err, result) {
        var obj = result;
        resolve(obj['rss'].channel[0].item[11]);
      });
    });
  }
}
