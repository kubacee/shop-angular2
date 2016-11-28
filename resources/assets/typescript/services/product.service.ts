import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    /* Properties */
    private _productUrl = 'api/product/';
    private _productListUrl = 'api/product/list/';

    // ~

    constructor (private http: Http) {}

    // ~

    /**
     * Get product
     *
     * @param productId
     * @returns {Observable<R>}
     */
    getProduct (productId: number) {
        let headers = new Headers();

        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this._productUrl + productId, options).map((res:Response) => res.json());
    }

    /**
     * Get product list
     *
     * @param categoryId
     * @returns {Observable<R>}
     */
    getProductList (categoryId: number) {
        let headers = new Headers();

        headers.append('X-AUTH', 'Bearer ' + localStorage.getItem('id_token'));
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this._productListUrl + categoryId, options).map((res:Response) => res.json());
    }
}