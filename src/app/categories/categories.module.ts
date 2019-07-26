import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CategoriesComponent } from './categories.component';
import { CategoriesRoutes } from './categories.routing';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(CategoriesRoutes),
    ReactiveFormsModule ,
    FormsModule
  ],
  declarations: [CategoriesComponent, AddCategoryComponent,EditCategoryComponent]
})
export class CategoriesModule {}
