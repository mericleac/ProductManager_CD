const mongoose = require("mongoose")
Product = mongoose.model("Product")

module.exports = {
    getProducts: function(req, res) {
        Product.find({}, function(err, data) {
            res.json({message: "Success!", products: data});
        })
    },
    getOneProduct: function(req, res) {
        Product.findOne({_id: req.params.id}, function(err, data) {
            res.json({message: "Success!", products: data});
        })
    },
    addProduct: function(req, res) {
        Product.create(req.body, function(err, data) {
            if (err) {
                res.json({message: "Error!", errors: err});
            }
            else {
                res.json({message: "Success!", products: data});
            }
        })
    },
    editProduct: function(req, res) {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, { runValidators: true }, function(err, data) {
            if (err) {
                res.json({message: "Error!", errors: err});
            }
            else {
                res.json({message: "Success!", products: data})
            }
        })
    },
    deleteProduct: function(req, res) {
        Product.remove({_id: req.params.id}, function(err, data) {
            res.json({message: "Success!", products: data});
        })
    }
}