import { Component } from '@angular/core';
import { ParseDataService } from './../services/parse-data.service';
import { GetDataService } from './../services/get-data.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private parseData: ParseDataService, private getData: GetDataService) { }
}
