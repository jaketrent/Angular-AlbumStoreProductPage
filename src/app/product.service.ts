import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json'
  constructor(private _http: Http) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map(res => res.json())
  }
  // TODO: this is required for part3 tests, but not for the solution to work
  getProducts(id: number) {
    return this._http.get(this._albumUrl).map(res => res.json())
  }

}
