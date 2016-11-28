import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
    selector: 'shop-category',
    templateUrl: 'js/category/category.component.html',
    providers: [ CategoryService ]
})

export class CategoryComponent {

    // ~ Properties

    categories;

    // ~

    constructor (private _categoryService: CategoryService) {
        /* ... */
    }

    ngOnInit() {
        this.categories = [];
        this.getList();
    }

    // ~

    getList() {
        this._categoryService.list().subscribe(
            data => { this.categories = data },
            error => { console.log(error.json) }
        );
    }
}