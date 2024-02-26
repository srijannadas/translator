# Translator API

This Node.js project serves as a simple API for translating English text to French using the Google Translate service. The application is built with the Express.js framework, providing a RESTful endpoint (`/translate`) for language translation.



## Packages Used

- **Express.js**: A minimal and flexible Node.js web application framework that allows us to build robust APIs quickly.

- **translate-google**: A Node.js library used for interacting with the Google Translate service, enabling language translation functionality.

- **nodemon**: A utility for Node.js that monitors for changes in your source code and automatically restarts the server when changes are detected. 

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/srijannadas/translator.git
   ```
2. **Navigate to the project directory**:

    ```bash
    cd translator-api
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
## Usage

1. **Start the server**:
    ```bash
    npm start
    ```
    The server will be running on http://localhost:3000 by default.

2. **Make a POST request to the /translate endpoint with a JSON body containing the English text to be translated.**:

    Example:
    ```json
    {
     "text": "Hello, how are you?"
    }
    ```
    The API will respond with the translated text in French.

## Endpoint

 <li> <b>POST/translate</b> : Translates English text to French.</li>
    
Example:
```json
{
  "text": "Hello, how are you?"
}
```
Response:
```json
{
  "translation": "Bonjour, comment ça va?"
}
```

## Error Handling

<li>if the request body does not contain the required "text" field, the API will respond with a 400 Bad Request error.</li>
<li>Internal Server Errors (500) are logged to the console.</li>
