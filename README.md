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
    - [Get Order by UserId](https://github.com/anast-ananko/server#get-order-by-user-id)
    - [Create Order](https://github.com/anast-ananko/server#create-order)
    - [Update Order](https://github.com/anast-ananko/server#update-order)
    - [Delete Order](https://github.com/anast-ananko/server#delete-order)

- **Ties**
    - [Get Ties](https://github.com/anast-ananko/server#get-ties)
    - [Get Tie](https://github.com/anast-ananko/server#get-tie)
    - [Get Tie by UserId](https://github.com/anast-ananko/server#get-tie-by-user-id)
    - [Create Tie](https://github.com/anast-ananko/server#create-tie)
    - [Update Tie](https://github.com/anast-ananko/server#update-tie)
    - [Delete Tie](https://github.com/anast-ananko/server#delete-tie)
   
- **Registration and Authorization**
    - [Registration](https://github.com/anast-ananko/server#registration)
    - [Authorization](https://github.com/anast-ananko/server#authorization)


**Get Users**
----
Returns json data about users.

<details>

* **URL**

    /users

* **Method:**

    `GET`

* **Headers:**

    None

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
Returns json data about specified user.

<details>

* **URL**

    /users/:id

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
      {}
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
        "role": "USER",
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

    None

* **Notes:**

    None

</details>


**Update User**
----
Updates role of selected user.

<details>

* **URL**

    /users/:id

* **Method:**

    `PATCH`

* **Headers:**

    `'Content-Type': 'application/json'`

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

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
      {}
    ```

* **Notes:**

    None

</details>

**Delete User**
----
Delete specified user.

<details>

* **URL**

    /users/:id

* **Method:**

    `DELETE`

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



**Start / Stop Car's Engine**
----
Starts or stops engine of specified car, and returns it's actual velocity and distance.

<details>

* **URL**

    /engine

* **Method:**

    `PATCH`

* **Headers:**

    None

*  **URL Params**

    None

* **Query Params**

    **Required:**
 
    `id=[integer]`
  
    `status=['started'|'stopped']`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "velocity": 64,
        "distance": 500000
      }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
      **Content:** 

      Wrong parameters: "id" should be any positive number, "status" should be "started", "stopped" or "drive"

  OR

  * **Code:** 404 NOT FOUND <br />
      **Content:** 

      Car with such id was not found in the garage.

* **Notes:**

    None

</details>

**Switch Car's Engine to Drive Mode**
----
Switches engine of specified car to drive mode and finishes with success message or fails with 500 error.

<details>

* **URL**

    /engine

* **Method:**

    `PATCH`

* **Headers:**

    None

*  **URL Params**

    None

* **Query Params**

    **Required:**
 
    `id=[integer]`
  
    `status=['drive']`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "success": true
      }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
      **Content:** 

      Wrong parameters: "id" should be any positive number, "status" should be "started", "stopped" or "drive"

  OR
  
  * **Code:** 404 NOT FOUND <br />
      **Content:** 

      Engine parameters for car with such id was not found in the garage. Have you tried to set engine status to "started" before?

  OR

  * **Code:** 429 TOO MANY REQUESTS <br />
      **Content:** 

      Drive already in progress. You can't run drive for the same car twice while it's not stopped.

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 

      Car has been stopped suddenly. It's engine was broken down.

* **Notes:**

    - Before using this request you need to switch engine status to the 'started' status first.
    - Time when response will finish can be calculated using response from making engine 'started'.
    - Engine may fall randomly and at random time at the whole distance.

</details>

**Get Winners**
----
Returns json data about winners.

<details>

* **URL**

    /winners

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    None

* **Query Params**

    **Optional:**
 
    `_page=[integer]`
  
    `_limit=[integer]`

    `_sort=['id'|'wins'|'time']`

    `_order=['ASC'|'DESC']`

    If `_limit` param is passed api returns a header `X-Total-Count` that countains total number of records.

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      [
        {
          "id": 16,
          "wins": 1,
          "time": 2.92
        }
      ]
    ```
    **Headers:**
    ```
      "X-Total-Count": "4"
    ```
 
* **Error Response:**

    None

* **Notes:**

    None

</details>

**Get Winner**
----
Returns json data about specified winner.

<details>

* **URL**

    /winners/:id

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    **Required:**
 
    `id=[integer]`

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
          "id": 1,
          "wins": 1,
          "time": 10
      }
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

**Create Winner**
----
Creates a new records in a winners table.

<details>

* **URL**

    /winners

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
        id: number,
        wins: number,
        time: number
      }
    ```

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
      {
        "id": 109,
        "wins": 1,
        "time": 10
      }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 

      Error: Insert failed, duplicate id

* **Notes:**

    None

</details>

**Delete Winner**
----
Delete specified car from a garage

<details>

* **URL**

    /winners/:id

* **Method:**

    `DELETE`

* **Headers:**

    None

*  **URL Params**

    **Required:**
 
    `id=[integer]`

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

**Update Winner**
----
Updates attributes of specified winner.

<details>

* **URL**

    /winners/:id

* **Method:**

    `PUT`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    **Required:**

    `id=[integer]`

* **Query Params**

    None

* **Data Params**

    ```typescript
      {
        wins: number,
        time: number
      }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "wins": 2,
        "time": 11,
        "id": 16
      }
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
