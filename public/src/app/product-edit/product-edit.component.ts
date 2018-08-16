import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    errors = {};
    id: number;
    productToEdit: {_id: number, title: "", price: 0, image_url: ""};

    constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.id = params['id'];
            this.getProduct(this.id);
        })
    }

    getProduct(id) {
        let observable = this._httpService.getOneProduct(id);
        observable.subscribe(data => {
            this.productToEdit = data['products'];
            console.log(this.productToEdit);
        })
    }
    
    updateProduct() {
        let observable = this._httpService.updateProduct(this.productToEdit._id, this.productToEdit);
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
