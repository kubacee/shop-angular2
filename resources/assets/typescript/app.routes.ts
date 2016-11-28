import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ProductComponent, ProductListComponent } from './product/product.component';

const appRoutes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'product/:id',
        component: ProductComponent
    },
    {
        path: 'category/:id',
        component: ProductListComponent
    }
];

export const Routing = RouterModule.forRoot(appRoutes);