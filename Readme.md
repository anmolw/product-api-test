# Ecommerce API Skill test

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
        "quantity": 20
    },
    "message": "product successfully created"
}
```

### Obtaining a list of products

Make a GET request to `/products`

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

Make a POST request to /products/:id/update_quantity?quantity=[+/-]value

Response:

```json
{
    "product": {
        "name": "",
        "quantity": 20
    },
    "message": "Product updated successfully"
}
```

### Deleting a product

Make a DELETE request to /products/:id

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

Ensure that MongoDB is running locally. If it is running on a port other than 27017, edit `config/mongodb.js` and change the connection URL.

Run index.js
```shell
node ./index.js
```