import { HomeComponent } from './home/home.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "items/new", component: ProductCreateComponent},
    {path: "items/edit/:id", component: ProductEditComponent},
    {path: "items", component: ProductListComponent, children: [
        {path: ":id", component: ProductDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
