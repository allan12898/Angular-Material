import { Routes } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { AddCategoryComponent} from './add-category/add-category.component'
import { EditCategoryComponent } from './edit-category/edit-category.component';

export const CategoriesRoutes: Routes = [
    {
        path: '',
        component: CategoriesComponent
    },
    {
        path: 'add',
        component: AddCategoryComponent
    },
    {
        path: 'edit/:id',
        component: EditCategoryComponent
    }
];
