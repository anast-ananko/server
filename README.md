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
    - [Get Users](https://github.com/anast-ananko/server/tree/develop#get-users)
    - [Get User](https://github.com/anast-ananko/server/tree/develop#get-user)
    - [Create User](https://github.com/anast-ananko/server/tree/develop#create-user)
    - [Update User](https://github.com/anast-ananko/server/tree/develop#update-user)
    - [Delete User](https://github.com/anast-ananko/server/tree/develop#delete-user)
  
- **Orders**
    - [Get Orders](https://github.com/anast-ananko/server/tree/develop#get-orders)
    - [Get Order](https://github.com/anast-ananko/server/tree/develop#get-order)
    - [Get Order by UserId](https://github.com/anast-ananko/server/tree/develop#get-order-by-user-id)
    - [Create Order](https://github.com/anast-ananko/server/tree/develop#create-order)
    - [Update Order](https://github.com/anast-ananko/server/tree/develop#update-order)
    - [Delete Order](https://github.com/anast-ananko/server/tree/develop#delete-order)

- **Ties**
    - [Get Ties](https://github.com/anast-ananko/server/tree/develop#get-ties)
    - [Get Tie](https://github.com/anast-ananko/server/tree/develop#get-tie)
    - [Get Tie by UserId](https://github.com/anast-ananko/server/tree/develop#get-tie-by-user-id)
    - [Create Tie](https://github.com/anast-ananko/server/tree/develop#create-tie)
    - [Update Tie](https://github.com/anast-ananko/server/tree/develop#update-tie)
    - [Delete Tie](https://github.com/anast-ananko/server/tree/develop#delete-tie)
   
- **Registration and Authorization**
    - [Registration](https://github.com/anast-ananko/server/tree/develop#registration)
    - [Authorization](https://github.com/anast-ananko/server/tree/develop#authorization)


**Get Users**
----
Returns json data about users (only available for ADMIN and MANAGER).

<details>

* **URL**

    /users

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

    /users/:id

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

    /users

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

    /users/:id

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

    /users/:id

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

    orders

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
          "image": "0bf7f318-5e02-431c-b684-55a481c5bfac.jpg",
          "price": 30,
          "status": "NON-PAID",
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

**Get Order**
----
Returns json data about selected order (only available for authorized users).

<details>

* **URL**

    /orders/:id

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
        "image": "0bf7f318-5e02-431c-b684-55a481c5bfac.jpg",
        "price": 30,
        "status": "NON-PAID",
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


**Get Orders by UserId**
----
Returns json data about all orders for selected user (only available for authorized users).

<details>

* **URL**

    /orders/user/:id

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
          "image": "0bf7f318-5e02-431c-b684-55a481c5bfac.jpg",
          "price": 30,
          "status": "NON-PAID",
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


**Create Order**
----
Creates a new order (only available for authorized users).

<details>

* **URL**

    /orders

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
        "image": "0bf7f318-5e02-431c-b684-55a481c5bfac.jpg",
        "price": 30
      }
    ```

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
      {
        "_id": "63dd20a04ccd605f5664e262",
        "userId": "63dbd9a0ed3f9585d55acd7b",
        "image": "0bf7f318-5e02-431c-b684-55a481c5bfac.jpg",
        "price": 30,
        "status": "NON-PAID",
        "date": "2023-02-03T14:56:32.461Z"
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

    /orders/:id

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
        "image": "0bf7f318-5e02-431c-b684-55a481c5bfac.jpg",
        "price": 30,
        "status": "PAID",
        "date": "2023-02-03T14:56:32.461Z"
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

    /orders/:id

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

    ties

* **Method:**

    `GET`

* **Headers:**

   `'Content-Type': 'application/json'`

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
          "name": "Blue tie",
          "image": "6be73cbd-1778-4e3b-a37a-bdbd10c0a827.jpg"
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

    /ties/:id

* **Method:**

    `GET`

* **Headers:**

   `'Content-Type': 'application/json'`

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
        "name": "Blue tie",
        "image": "6be73cbd-1778-4e3b-a37a-bdbd10c0a827.jpg"
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

    /ties/user/:id

* **Method:**

    `GET`

* **Headers:**

   `'Content-Type': 'application/json'`<br />
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
          "name": "Blue tie",
          "image": "6be73cbd-1778-4e3b-a37a-bdbd10c0a827.jpg"
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

    /ties

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
        "name": "Blue tie",
        Property image is optional
        "image": "6be73cbd-1778-4e3b-a37a-bdbd10c0a827.jpg"
      }
    ```

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
      {
        "_id": "63d9764a9110523df50c4d37",
        "userId": "63dbd9a0ed3f9585d55acd7b",
        "name": "Blue tie",
        "image": "6be73cbd-1778-4e3b-a37a-bdbd10c0a827.jpg"
      }
    ```
 
* **Error Response:**

    None

* **Notes:**

    None

</details>


**Delete Tie**
----
Deletes selected tie (only available for ADMIN, MANAGER and SELLER).

<details>

* **URL**

    /ties/:id

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

    /registration

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    None

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
        "email": "user@mail.ru",
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
        message: "Сheck if all fields are filled"
      }
      OR
      {
        message: "User with this name exists"
      }
    ```

* **Notes:**

    None

</details>


**Auterization**
----
Auterization for user.

<details>

* **URL**

    /login

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "user": {
            "_id": "63dd20914ccd605f5664e25e",
            "email": "user5@mail.ru",
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
        message: "User with user@mail.ru not found"
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













