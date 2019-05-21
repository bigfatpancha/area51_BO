import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  url = 'http://localhost:8080/area51/BO/sales';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) {}

  getSales() {
    return this.http.get(this.url, this.httpOptions);
  }
}
