import { Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

export const ProductsRoutes: Routes = [
    {
        path: '',
        component:ProductsComponent
    },
    {
        path: 'add',
        component:AddProductComponent
    },
    {
        path: 'edit/:id',
        component:EditProductComponent
    }
];
