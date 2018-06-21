import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

import { Data } from '../models/data.model'

@Injectable()
export class ComicsService {
  private url: string = 'https://gateway.marvel.com/v1/public/comics?'
  private apiKey: string = '78a6a422ecc055dce2d097c7b13b7741'

  private headers = new Headers({
      'Accept': '*/*',
      'Content-Type': 'application/json'
  });

  constructor(private http: Http) { }

  public get(): Observable<Data> {
    return this.http
      .get(this.makeUrl(), { headers: this.headers })
      .map(response => new Data(response.json().data));
  }

  private makeUrl(): string {
    return this.url
      .concat(`apikey=${this.apiKey}`)
  }
}
