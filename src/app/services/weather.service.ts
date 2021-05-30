import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URI :String = ""
  KEY :String = `40eb1ba27c4a8261b82f6c56048d0820`
  constructor(private httpClient: HttpClient) { 
    this.URI= `https://api.openweathermap.org/data/2.5/weather?appid=${this.KEY}&units=metric&q=`
  }
  getWeather(cityName:string,countryCode:string){
    return this.httpClient.get(`${this.URI}${cityName},${countryCode}`)
  }
}
