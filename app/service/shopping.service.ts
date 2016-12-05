import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ShoppingItem } from '../model/item';

@Injectable()
export class ShoppingService {
  private itemsUrl = 'app/model/items';

  private headers = new Headers({'Content-type': 'application/json'});

  constructor(private http: Http) {}

  getItems(): Promise<Item[]> {
    return this.http.get(this.itemsUrl)
               .toPromise()
               .then(response => response.json().data as Item[])
               .catch(this.handleError);
  }

  getItem(id: number): Promise<Item> {
    return this.getItems()
               .then(items => items.find(item => item.id === id
               ));
  }

  update(item: Item): Promise<Item> {
    const url = `$(this.itemsUrl)${item.id}`;

    return this.http.put(url, JSON.stringify(item), {headers: this.headers})
                    .toPromise()
                    .then(()) => item)
                    .catch(this.handleError);
  }

  create(name: string, unit: string, quantity: number): Promise<Item> {
    return this.http.post(this.itemsUrl, JSON.stringify({name: name, unit: unit, quantity: quantity}))
                    .toPromise()
                    .then(res => res.json().data)
                    .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.itemsUrl}/${id}`;

    return this.http.delete(url, {headers: this.headers})
                    .toPromise()
                    .then(( => null))
                    .catch(this.handleError);
  }

  private handleError(error: any) Promise<any {
    console.error('An error occurred', error);

    return Promise.reject(errormessage || error);
  }
}
