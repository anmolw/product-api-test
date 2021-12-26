# Ecommerce API test

## API Spec

### Creating a product

Make a `POST` request to `/products/create` with data in the following format:

```json
{
    "product": {
        "name": "Shirt",
        "quantity": 20
    }
}
```
Response:

```json
{
    "product": {
        "name": "Shirt",
        "quantity": 20,
        "id": 1,

    },
    "message": "product successfully created"
}
```

### Obtaining a list of products

Make a `GET` request to `/products`

Response:

```json
{
    "products": [
        {
            "id": 1,
            "name": "Shirt",
            "quantity": 20
        },
        {
            "id": 2,
            "name": "Suit",
            "quantity": 5
        },
        {
            "id": 3,
            "name": "Watch",
            "quantity": 30
        },
    ]
}
```

### Updating the quantity of a product

Make a `POST` request to `/products/id/update_quantity?number=value`

For example, if a product with id 2 has a quantity of 20, the following request will reduce the quantity by 10

`POST /products/2/update_quantity?number=-10`

Response:

```json
{
    "product": {
        "name": "tennis ball",
        "quantity": 10
    },
    "message": "Product updated successfully"
}
```

A positive value will increase the quantity.

### Deleting a product

Make a DELETE request to /products/id

`DELETE /products/1`

Response:

```json
{
    "message": "Product deleted successfully"
}
```

## Running locally

Install the package dependencies
```shell
npm install
```

Ensure that MongoDB is running locally at port 27017. If it is running on a different host or port, edit `config/mongodb.js` and change the connection string.
To change the port that the server listens on, edit `PORT` in index.js

Run index.js
```shell
node ./index.js
```