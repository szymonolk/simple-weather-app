import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    //this.getWeather();
  }

  weatherData: any;

  apiKey = "9947KG7ZUZHFECT2KD63UHRDA";

  url: string = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
    "Gda%C5%84sk?unitGroup=metric&key="+this.apiKey+"&contentType=json";

  getWeather(){
    return this.http.get(this.url).subscribe(data => {
      this.weatherData = data;

    });
  }

  getNewWeather(city: string){
    return this.http.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      " "+ city + "?unitGroup=metric&key="+this.apiKey+"&contentType=json").subscribe(data => {
      this.weatherData = data;
    });
  }

  title = 'weatherApp';
}

