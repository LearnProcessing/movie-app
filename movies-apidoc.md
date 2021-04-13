# KANBAN
## ``` Models ```

- Table name: APICalls

```
{
    "endpoint: <string>,
    "parameters": <string>,
    "createdAt": <date>,
    "updatedAt": <date>
}

```

## ``` Routes ```
<a id="routes"></a>
## 1. [Search Movies](#searchMovies)
## 2. [Movie Details](#movieDetails)


## GET /search/:keywords/:page
<a id="searchMovies"></a>

Params: 
    { 
        "keywords": <string>,
        "page": <integer>
    }
    *notes: separate words with "+" in keywords value

Responses:

- 200
    ```
    {
        "Search": [
            {
            "Title": <string>,
            "Year": <integer>,
            "imdbID": <string>,
            "Type": <string>,
            "Poster": <string>
            },
            , ...args 
        ]
    }
    ```
- 404
    {
        "errorCode": 404,
        "message": "Movie not found"
    }
- 500
    ```
    {"message": "internal server error"}
    ```

[back to routes index](#routes)
## GET /detail/:title
<a id="movieDetails"></a>

Params: 
    { "title": <string> }
    *notes: separate words with "+" in title value

- 200
    ```
    {
        "endpoint: <string>,
        "parameters": <string>,
        "createdAt": <date>,
        "updatedAt": <date>
    }
    ```
- 404
    {
        "errorCode": 404,
        "message": "Movie not found"
    }

- 500
    ```
    {"message": "internal server error"}
    ```

[back to routes index](#routesß)`


