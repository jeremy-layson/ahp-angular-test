import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromFetch } from 'rxjs/fetch';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  constructor(private http: HttpClient) {}

  sendRequest() {
    const API_URL = 'https://api.sampleapis.com'

    return fromFetch(`${API_URL}/beers/ale`, { selector: (response: any) => response.json() });
  }
}
