import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { GetDataService } from './../services/get-data.service'

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  map: any = '';
  imgSrc: string;
  imgSrc1: string;

  constructor(private getData: GetDataService, private ngxXml2jsonService: NgxXml2jsonService) { }

  ngOnInit() {
    const parser = new DOMParser();
    this.getData.getRemoteData('https://www.civilprotection.gr/el/map-rss').then(data => {
      let xml = parser.parseFromString(data.data, 'text/xml')
      const obj = this.ngxXml2jsonService.xmlToJson(xml);
      this.map = obj['rss'].channel.item;
      console.log(this.map)
    })
    let date = new Date();
    let year = date.getFullYear().toString().slice(-2);
    let monthN = date.getMonth() + 1;
    let monthS = ''
    if (monthN < 10) {
      monthS = "0" + monthN.toString();
    } else monthS = monthN.toString()
    let day = (date.getDate() + 1).toString();
    let day2 = (date.getDate()).toString();
    let fullYear = year + monthS + day;
    let fullYear2 = year + monthS + day2;
    this.imgSrc = 'https://www.civilprotection.gr/sites/default/gscp_uploads/' + fullYear + '.jpg';
    this.imgSrc1 = 'https://www.civilprotection.gr/sites/default/gscp_uploads/' + fullYear2 + '.jpg';
  }

}
