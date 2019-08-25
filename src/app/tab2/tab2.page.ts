import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { GetDataService } from './../services/get-data.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  news: any;

  constructor(private getData: GetDataService, private ngxXml2jsonService: NgxXml2jsonService) { }

  ngOnInit() {
    const parser = new DOMParser();
    this.getData.getRemoteData('https://www.civilprotection.gr/el/gscp-rss-anakoinosi').then(data => {
      let xml = parser.parseFromString(data.data, 'text/xml')
      const obj = this.ngxXml2jsonService.xmlToJson(xml);
      this.news = obj['rss'].channel.item;
      console.log(this.news)
    })
  }

}
