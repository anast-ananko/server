# server-api
Api for Tie Creators.

## Setup and Running

- Use `node 14.x` or higher.
- Clone this repo: `$ git clone https://github.com/anast-ananko/server.git`.
- Go to downloaded folder: `$ cd server`.
- Install dependencies: `$ npm install`.
- Start server: `$ npm start`.
- Now you can send requests to the address: `http://localhost:5000`.

- **Users**
    - [Get Users](https://github.com/anast-ananko/server#get-users)
    - [Get User](https://github.com/anast-ananko/server#get-user)
    - [Create User](https://github.com/anast-ananko/server#create-user)
    - [Update User](https://github.com/anast-ananko/server#update-user)
    - [Delete User](https://github.com/anast-ananko/server#delete-user)
  
- **Orders**
    - [Get Orders](https://github.com/anast-ananko/server#get-orders)
    - [Get Order](https://github.com/anast-ananko/server#get-order)
    - [Get Orders by UserId](https://github.com/anast-ananko/server#get-orders-by-user-id)
    - [Get Orders by SellerId](https://github.com/anast-ananko/server#get-orders-by-seller-id)
    - [Create Order](https://github.com/anast-ananko/server#create-order)
    - [Update Order](https://github.com/anast-ananko/server#update-order)
    - [Delete Order](https://github.com/anast-ananko/server#delete-order)

- **Ties**
    - [Get Ties](https://github.com/anast-ananko/server#get-ties)
    - [Get Tie](https://github.com/anast-ananko/server#get-tie)
    - [Get Ties by UserId](https://github.com/anast-ananko/server#get-ties-by-user-id)
    - [Get Another Ties](https://github.com/anast-ananko/server#get-another-ties)
    - [Create Tie](https://github.com/anast-ananko/server#create-tie)
    - [Delete Tie](https://github.com/anast-ananko/server#delete-tie)
   
- **Registration and Authorization**
    - [Registration](https://github.com/anast-ananko/server#registration)
    - [Authorization](https://github.com/anast-ananko/server#authorization)


**Get Users**
----
Returns json data about users (only available for ADMIN and MANAGER).

<details>

* **URL**

    /api/users

* **Method:**

    `GET`

* **Headers:**

    `'Authorization': 'Bearer [token]'`

*  **URL Params**

    None

* **Query Params**

    **Optional:**
 
    `role=['USER'|'SELLER'|'MANAGER'|'ADMIN']`
  

    Api returns a header `X-Total-Count` that countains total number of records.

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      [
        {
          "_id": "63dd20a04ccd605f5664e262",
          "email": "user1@mail.ru",
          "password": "$2a$04$PNpGTzompxdmhUbGX/kbRuy/56KMsWzyHsozQO2jct9H4JONhbOGW",
          "role": "USER",
          "date": "2023-02-03T14:56:32.461Z"
        }
      ]
    ```
    **Headers:**
    ```
      "X-Total-Count": "10"
    ```
 
* **Error Response:**

    None

* **Notes:**

    None

</details>

**Get User**
----
Returns json data about selected user (only available for ADMIN and MANAGER).

<details>

* **URL**

    /api/users/:id

* **Method:**

    `GET`

* **Headers:**

    `'Authorization': 'Bearer [token]'`

*  **URL Params**

    **Required:**
 
    `id=[string]`

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "_id": "63dd20a04ccd605f5664e262",
        "email": "user1@mail.ru",
        "password": "$2a$04$PNpGTzompxdmhUbGX/kbRuy/56KMsWzyHsozQO2jct9H4JONhbOGW",
        "role": "USER",
        "date": "2023-02-03T14:56:32.461Z"
      }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
      {
        message: "User with this id not found"
      }
    ```

* **Notes:**

    None

</details>

**Create User**
----
Creates a new user.

<details>

* **URL**

    /api/users

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    ```typescript
      {
        "email": "user1@mail.ru",
        "password": "user1",
        "role": ["USER"|"SELLER"]
      }
    ```

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
      {
        "_id": "63dd20a04ccd605f5664e262",
        "email": "user1@mail.ru",
        "password": "$2a$04$PNpGTzompxdmhUbGX/kbRuy/56KMsWzyHsozQO2jct9H4JONhbOGW",
        "role": "USER",
        "date": "2023-02-03T14:56:32.461Z"
      }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
      {
        message: "Incorrect email or password"
      }
    ```

* **Notes:**

    None

</details>


**Update User**
----
Updates role of selected user (only available for ADMIN).

<details>

* **URL**

    /api/users/:id

* **Method:**

    `PATCH`

* **Headers:**

    `'Content-Type': 'application/json'`<br />
    `'Authorization': 'Bearer [token]'`

*  **URL Params**

    **Required:**

    `id=[string]`

* **Query Params**

    None

* **Data Params**

    ```typescript
      {
        "role": "MANAGER"
      }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {        
        "_id": "63dd20a04ccd605f5664e262",
        "email": "user1@mail.ru",
        "password": "$2a$04$PNpGTzompxdmhUbGX/kbRuy/56KMsWzyHsozQO2jct9H4JONhbOGW",
        "role": "MANAGER",
        "date": "2023-02-03T14:56:32.461Z"
      }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
      {
        message: "User has not been updated"
      }
    ```

* **Notes:**

    None

</details>

**Delete User**
----
Deletes selected user (only available for ADMIN).

<details>

* **URL**

    /api/users/:id

* **Method:**

    `DELETE`

* **Headers:**

    `'Authorization': 'Bearer [token]'`

*  **URL Params**

    **Required:**
 
    `id=[string]`

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {}
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
      {}
    ```

* **Notes:**

    None

</details>

**Get Orders**
----
Returns json data about orders (only available for ADMIN and MANAGER).

<details>

* **URL**

    /api/orders

* **Method:**

    `GET`

* **Headers:**

    `'Authorization': 'Bearer [token]'`


*  **URL Params**

    None

* **Query Params**

      None
  

    Api returns a header `X-Total-Count` that countains total number of records.

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      [
        {
          "_id": "63dd20a04ccd605f5664e262",
          "userId": "63dbd9a0ed3f9585d55acd7b",
          "image": "https://i.ibb.co/ZLs1r2L/14.jpg",
          "price": 30,
          "status": "NON-PAID",
          "date": "2023-02-03T14:56:32.461Z",
          "sellerId": "63e3fb253a85875ab9a671c4"
        }
      ]
    ```
    **Headers:**
    ```
      "X-Total-Count": "10"
    ```
 
* **Error Response:**

    None

* **Notes:**

    None

</details>

**Get Order**
----
Returns json data about selected order (only available for authorized users).

<details>

* **URL**

    /api/orders/:id

* **Method:**

    `GET`

* **Headers:**

    `'Authorization': 'Bearer [token]'`

*  **URL Params**

    **Required:**
 
    `id=[string]`

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "_id": "63dd20a04ccd605f5664e262",
        "userId": "63dbd9a0ed3f9585d55acd7b",
        "image": "https://i.ibb.co/ZLs1r2L/14.jpg",
        "price": 30,
        "status": "NON-PAID",
        "date": "2023-02-03T14:56:32.461Z",
        "sellerId": "63e3fb253a85875ab9a671c4"
      }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
      {
        message: "User with this id not found"
      }
    ```

* **Notes:**

    None

</details>


**Get Orders by UserId**
----
Returns json data about all orders for selected user (only available for authorized users).

<details>

* **URL**

    /api/orders/user/:id

* **Method:**

    `GET`

* **Headers:**

    `'Authorization': 'Bearer [token]'`

*  **URL Params**

    **Required:**
 
    `id=[string]`

    Api returns a header `X-Total-Count` that countains total number of records.

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      [
        {
          "_id": "63dd20a04ccd605f5664e262",
          "userId": "63dbd9a0ed3f9585d55acd7b",
          "image": "https://i.ibb.co/ZLs1r2L/14.jpg",
          "price": 30,
          "status": "NON-PAID",
          "date": "2023-02-03T14:56:32.461Z",
          "sellerId": "63e3fb253a85875ab9a671c4"
        }
      ]
    ```
    **Headers:**
    ```
      "X-Total-Count": "10"
    ```
 
* **Error Response:**

    None

* **Notes:**

    None

</details>


**Get Orders by SellerId**
----
Returns json data about all orders for selected seller (only available for authorized users).

<details>

* **URL**

    /api/orders/seller/:id

* **Method:**

    `GET`

* **Headers:**

    `'Authorization': 'Bearer [token]'`

*  **URL Params**

    **Required:**
 
    `id=[string]`

    Api returns a header `X-Total-Count` that countains total number of records.

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      [
        {
          "_id": "63dd20a04ccd605f5664e262",
          "userId": "63dbd9a0ed3f9585d55acd7b",
          "image": "https://i.ibb.co/ZLs1r2L/14.jpg",
          "price": 30,
          "status": "NON-PAID",
          "date": "2023-02-03T14:56:32.461Z",
          "sellerId": "63e3fb253a85875ab9a671c4"
        }
      ]
    ```
    **Headers:**
    ```
      "X-Total-Count": "10"
    ```
 
* **Error Response:**

    None

* **Notes:**

    None

</details>


**Create Order**
----
Creates a new order (only available for authorized users).

<details>

* **URL**

    /api/orders

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`<br />
    `'Authorization': 'Bearer [token]'`

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    ```typescript
      {
        "userId": "63dbd9a0ed3f9585d55acd7b",
        "image": "https://i.ibb.co/ZLs1r2L/14.jpg",
        "price": 30,
        "sellerId": "63e3fb253a85875ab9a671c4"
      }
    ```

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
      {
        "_id": "63dd20a04ccd605f5664e262",
        "userId": "63dbd9a0ed3f9585d55acd7b",
        "image": "https://i.ibb.co/ZLs1r2L/14.jpg",
        "price": 30,
        "status": "NON-PAID",
        "date": "2023-02-03T14:56:32.461Z",
        "sellerId": "63e3fb253a85875ab9a671c4"
      }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
      {
        message: "Check if all fields are filled"
      }
    ```

* **Notes:**

    None

</details>


**Update Order**
----
Updates status of selected order (only available for ADMIN and MANAGER).

<details>

* **URL**

    /api/orders/:id

* **Method:**

    `PATCH`

* **Headers:**

    `'Content-Type': 'application/json'`<br />
    `'Authorization': 'Bearer [token]'`

*  **URL Params**

    **Required:**

    `id=[string]`

* **Query Params**

    None

* **Data Params**

    ```typescript
      {
        "status": ['NON-PAID', 'PAID', 'DECLINED', 'IN PROGRESS', 'FINISHED']
      }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "_id": "63dd20a04ccd605f5664e262",
        "userId": "63dbd9a0ed3f9585d55acd7b",
        "image": "https://i.ibb.co/ZLs1r2L/14.jpg",
        "price": 30,
        "status": "PAID",
        "date": "2023-02-03T14:56:32.461Z",
        "sellerId": "63e3fb253a85875ab9a671c4"
      }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
      {
        message: "Order has not been updated"
      }
    ```

* **Notes:**

    None

</details>

**Delete Order**
----
Deletes selected order (only available for ADMIN and MANAGER).

<details>

* **URL**

    /api/orders/:id

* **Method:**

    `DELETE`

* **Headers:**

    `'Authorization': 'Bearer [token]'`

*  **URL Params**

    **Required:**
 
    `id=[string]`

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {}
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
      {}
    ```

* **Notes:**

    None

</details>


**Get Ties**
----
Returns json data about ties.

<details>

* **URL**

    /api/ties

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    None

* **Query Params**

    None  

    Api returns a header `X-Total-Count` that countains total number of records.

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      [
        {
          "_id": "63d9764a9110523df50c4d37",
          "userId": "63dbd9a0ed3f9585d55acd7b",
          "name": "MU-765",
          "image": "https://i.ibb.co/ZLs1r2L/14.jpg",
          "price": 20
        }
      ]
    ```
    **Headers:**
    ```
      "X-Total-Count": "10"
    ```
 
* **Error Response:**

    None

* **Notes:**

    None

</details>

**Get Tie**
----
Returns json data about selected tie.

<details>

* **URL**

    /api/ties/:id

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    **Required:**
 
    `id=[string]`

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "_id": "63d9764a9110523df50c4d37",
        "userId": "63dbd9a0ed3f9585d55acd7b",
        "name": "RF-56",
        "image": "https://i.ibb.co/ZLs1r2L/14.jpg",
        "price": 20
      }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
      {
         message: "Tie with this id not found"
      }
    ```

* **Notes:**

    None

</details>


**Get Ties by UserId**
----
Returns json data about all ties for selected user (only available for SELLER).

<details>

* **URL**

    /api/ties/user/:id

* **Method:**

    `GET`

* **Headers:**

    `'Authorization': 'Bearer [token]'`

*  **URL Params**

    **Required:**
 
    `id=[string]`

    Api returns a header `X-Total-Count` that countains total number of records.

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      [
        {
          "_id": "63d9764a9110523df50c4d37",
          "userId": "63dbd9a0ed3f9585d55acd7b",
          "name": "RT-67",
          "image": "https://i.ibb.co/ZLs1r2L/14.jpg",
          "price": 20
        }
      ]
    ```
    **Headers:**
    ```
      "X-Total-Count": "10"
    ```
 
* **Error Response:**

    None

* **Notes:**

    None

</details>

**Get Another Ties**
----
Returns json data about ties that are not buyed by the user.

<details>

* **URL**

    /api/ties/user/another/:id

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    None

* **Query Params**

    None  

    Api returns a header `X-Total-Count` that countains total number of records.

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      [
        {
          "_id": "63d9764a9110523df50c4d37",
          "userId": "63dbd9a0ed3f9585d55acd7b",
          "name": "MU-765",
          "image": "https://i.ibb.co/ZLs1r2L/14.jpg",
          "price": 20
        }
      ]
    ```
    **Headers:**
    ```
      "X-Total-Count": "10"
    ```
 
* **Error Response:**

    None

* **Notes:**

    None

</details>


**Create Tie**
----
Creates a new tie (only available for SELLER).

<details>

* **URL**

    /api/ties

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`<br />
    `'Authorization': 'Bearer [token]'`

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    ```typescript
      {
        "userId": "63dbd9a0ed3f9585d55acd7b",
        "name": "RT-23",
        "price": 20,
        "image": "https://i.ibb.co/ZLs1r2L/14.jpg"
      }
    ```

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
      {
        "_id": "63d9764a9110523df50c4d37",
        "userId": "63dbd9a0ed3f9585d55acd7b",
        "name": "OP-234",
        "image": "https://i.ibb.co/ZLs1r2L/14.jpg", 
        "price": 20
      }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
      {
        message: "Check if all fields are filled"
      }
    ```

* **Notes:**

    None

</details>


**Delete Tie**
----
Deletes selected tie (only available for ADMIN, MANAGER and SELLER).

<details>

* **URL**

    /api/ties/:id

* **Method:**

    `DELETE`

* **Headers:**

    `'Authorization': 'Bearer [token]'`

*  **URL Params**

    **Required:**
 
    `id=[string]`

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {}
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
      {}
    ```

* **Notes:**

    None

</details>


**Registration**
----
Registration for user.

<details>

* **URL**

    /api/auth/registration

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    ```typescript
      {
        "email": "user10@gmail.ru",
        "password": "user10",
        "role": "USER"
      }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "_id": "63dd20a04ccd605f5664e262",
        "email": "user10@gmail.ru",
        "password": "$2a$04$PNpGTzompxdmhUbGX/kbRuy/56KMsWzyHsozQO2jct9H4JONhbOGW",
        "role": "USER",
        "date": "2023-02-03T14:56:32.461Z"
      }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
      {
        message: "Registration error"
      }
      OR
      {
        message: "??heck if all fields are filled"
      }
      OR
      {
        message: "User with this name exists"
      }
    ```

* **Notes:**

    None

</details>


**Authorization**
----
Auterization for user.

<details>

* **URL**

    /api/auth/login

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

  ```typescript
      {
        "email": "user10@gmail.ru",
        "password": "user10"
      }
  ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "user": {
            "_id": "63dd20914ccd605f5664e25e",
            "email": "user10@gmail.ru",
            "password": "$2a$04$ZaOJYkDcaxFnzZ.y6kf9GOtfi5a1WCkenGZLFRtwj9PT/ct5qLw1i",
            "role": "ADMIN",
            "date": "2023-02-03T14:56:17.210Z"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGQyMDkxNGNjZDYwNWY1NjY0ZTI1ZSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY3NTUxOTE1MywiZXhwIjoxNjc1NTYyMzUzfQ.aJImJSSVNLWgP1Y8QGK37kBQ-Qvtxg25N9dZbMzciZo"
      }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
      {
        message: "User with user@gmail.ru not found"
      }
    ```

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
      {
        message: "Incorrect password"
      }
      OR
      {
        message: "Login error"
      }
    ```  

* **Notes:**

    None

</details>
