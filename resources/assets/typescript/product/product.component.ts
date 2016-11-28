import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ProductService } from '../services/product.service'

@Component({
    selector: 'shop-product',
    templateUrl: 'js/product/product.component.html',
    providers: [ ProductService ]
})

export class ProductComponent {
    /* Properties */
    product;
    private productId: number;

    // ~

    /**
     * @param _router
     * @param _route
     * @param _productService
     */
    constructor (
        private _router: Router,
        private _route: ActivatedRoute,
        private _productService: ProductService
    ) {
        /* ... */
    }

    /**
     * Init
     */
    public ngOnInit() {
        this.prepareParams();
        this.getProduct();
    }

    // ~

    private getProduct() {
        this._productService.getProduct(this.productId).subscribe(
            data => { this.product = data },
            error => { console.log(error.json) }
        );
    }

    private prepareParams() {
        this._route.params.subscribe(params => {
            this.productId = params['id'];
        });
    }
}

// ~

@Component({
    selector: 'shop-product-list',
    templateUrl: 'js/product/product-list.component.html',
    providers: [ ProductService ]
})

export class ProductListComponent {
    /* Properties */
    products;
    private categoryId: number;

    // ~

    /**
     * @param _router
     * @param _route
     * @param _productService
     */
    constructor (
        private _router: Router,
        private _route: ActivatedRoute,
        private _productService: ProductService
    ) {
        /* ... */
    }

    /**
     * Init
     */
    public ngOnInit() {
        this.prepareParams();
        this.getProductList();
    }

    // ~

    private getProductList() {
        this._productService.getProductList(this.categoryId).subscribe(
            data => { this.products = data; console.log(data) },
            error => { console.log(error.json) }
        );
    }

    private prepareParams() {
        this._route.params.subscribe(params => {
            this.categoryId = params['id'];
        });
    }
}