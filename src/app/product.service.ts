import 'rxjs/add/operator/map'

import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Album } from './album'

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json'
  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map(res => <Album>res.json())
  }
  // TODO: this is required for part3 tests, but not for the solution to work
  getProducts(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map(res => <Album>res.json())
  }

}
