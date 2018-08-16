import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
    product = { title: "", price: 0.00, image_url: "" }
    errors = {};

    constructor(private _httpService: HttpService, private _router: Router) { }

    ngOnInit() {
    }
    createProduct() {
        this.product.price = Number(this.product.price);
        let observable = this._httpService.createProduct(this.product);
        observable.subscribe(data => {
            if (data['errors']) {
                for (let error in data['errors']['errors']) {
                    this.errors[error] = data['errors']['errors'][error]['message'];
                }
                console.log(this.errors);
            }
            else {
                this._router.navigate(['items']);
            }
        })
    }
}
