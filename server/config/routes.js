const products = require("../controllers/products")
const path = require("path");

module.exports = function (app) {
    app.get("/products", function(req, res) {
        products.getProducts(req, res);
    })

    app.get("/products/:id", function(req, res) {
        products.getOneProduct(req, res);
    })

    app.post("/products", function(req, res) {
        products.addProduct(req, res);
    })

    app.put("/products/:id", function(req, res) {
        products.editProduct(req, res);
    })

    app.delete("/products/:id", function(req, res) {
        products.deleteProduct(req, res);
    })

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}