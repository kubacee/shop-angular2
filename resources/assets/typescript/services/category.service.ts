import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
    constructor (private http: Http) {}

    private _listUrl = 'api/category/list';

    /**
     * Categories list
     *
     * @returns {Observable<R>}
     */
    list () {
        let headers = new Headers();

        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this._listUrl, options).map((res:Response) => res.json());
    }
}