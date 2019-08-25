import { Component, OnInit } from '@angular/core';
import { WeatherKey, CityId } from './../constants/constants';
import { GetDataService } from './../services/get-data.service'

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  weatherForecast: any = []
  iconUrl: "http://openweathermap.org/img/wn/"

  constructor(private getData: GetDataService) { }

  ngOnInit() {
    let weatherQuery = 'https://api.openweathermap.org/data/2.5/forecast?id=' + CityId + '&mode=json&units=metric&APPID=' + WeatherKey;
    this.getData.getRemoteData(weatherQuery).then(data => {
      let weatherForecast = JSON.parse(data.data);
      this.weatherForecast = weatherForecast.list
      console.log(this.weatherForecast)
    })
  }
}
