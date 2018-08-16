import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    @Input() productToShow: any;

    constructor(private _httpService: HttpService, private _productlist: ProductListComponent) { }

    ngOnInit() {
    }

    deleteProduct() {
        let observable = this._httpService.deleteProduct(this.productToShow._id);
        observable.subscribe(data => {
            console.log(data);
            this._productlist.getProducts();
        })
    }

}