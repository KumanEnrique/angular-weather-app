import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  weather

  constructor(private weatherService:WeatherService){}
  ngOnInit(){
    
  }
  getWeather(country: HTMLInputElement, countryCode: HTMLInputElement) {
    if (country.value && countryCode.value) {
      console.log(country.value, countryCode.value)
      this.weatherService.getWeather(country.value, countryCode.value)
        .subscribe(
          res => {
            this.weather = res
            console.log(res)
          },
          error => console.log(error)
        )
      country.value = ""
      countryCode.value = ""
      country.focus()
    }
    
    return false
  }
}
