# Blue Horizon Defense - 2024-Spring-Grp-27
Welcome to the readme of our group project below you may find instructions on implementation and various other things our group may of thought helpful for the project.
<details>
<summary>Web Scraper implementation</summary>
<br>
Running the provided Node.js and HTML code in Visual Studio Code (VS Code) involves a few simple steps. Here's a guide on how to do it:

## Setting Up Your Project
Install Node.js: Make sure Node.js is installed on your system. If it's not installed, you can download and install it from nodejs.org.

### Create a Project Directory:
 Create a new directory for your project. This directory will contain both your backend (Node.js) and frontend (HTML) code.

### Open VS Code: 
Open Visual Studio Code and open the project directory you just created.

### Backend Setup
Create Backend Files: Inside your project directory, create a new file for your Node.js server, e.g., server.js.

### Install Dependencies:

Open the VS Code terminal (Terminal > New Terminal).
In the terminal, run npm init -y to create a package.json file.
Install required packages by running npm install express cors axios cheerio.

### Running the Backend
Start the Server:
In the VS Code terminal, run node server.js.
This will start the server on localhost and the specified port (e.g., 3000).

### Running the Frontend
Open HTML File in a Browser:
Right-click on index.html in VS Code.
Select Open with Live Server if you have the Live Server extension installed, or simply open the file in your web browser.
Testing the Application
Use the Application:
In the browser where index.html is open, type a search query into the search bar and click the search button.
The server should process the request, and your frontend should display the resulting images.
Additional Tips
Live Server Extension: For a better experience with the frontend, you can install the "Live Server" extension in VS Code. It allows you to open your HTML file with a live-reloading server.
</details>

<details>
<summary>Web scraper explanation</summary>
<br>

## Backend Explanation

1. Require Dependencies: The backend script starts by requiring necessary Node.js modules:
* express: A web application framework for Node.js used to build web applications and APIs.
* cors: A package to enable Cross-Origin Resource Sharing (CORS), allowing the frontend to make requests to the backend from a different origin.
* axios: A promise-based HTTP client for making requests to external services.
* cheerio: A library that implements a subset of jQuery for parsing HTML and traversing the resulting data structure.
2. Initialize Express Application: An Express app instance is created. This app will handle incoming HTTP requests.
3. Enable CORS: app.use(cors()); middleware is used to enable CORS, which is necessary for the frontend to communicate with the backend without security issues related to cross-origin requests.
4. Define an Endpoint for Image Search: The code sets up an asynchronous route handler for GET requests to /search. It uses a query parameter keyword to perform a search.
* req.query.keyword retrieves the search keyword from the request's query string.
* Constructs a Google search URL for images based on the keyword.
* Uses axios to fetch the HTML content of the Google search results page.
* Parses the fetched HTML using cheerio to extract image sources (src attributes).
* Each image source is pushed into the results array.
* Responds with the results array in JSON format to the client.
5. Error Handling: If an error occurs during the request to Google or parsing the results, it logs the error and sends a 500 status response indicating an internal server error.
6. Start the Server: Finally, the script sets the server to listen on a port specified by the PORT environment variable or defaults to 3000. It logs a message indicating the server is running and on which port.

## Frontend Explanation
The frontend is a simple HTML page with a script for fetching and displaying image results based on a user's search query.

1. HTML Structure:
* An input field (searchBar) for users to enter search keywords.
* A button that triggers the searchImages function when clicked.
* A div (results) where search results will be displayed.
2. JavaScript for Image Search:
* Defines the searchImages async function, which is called when the search button is clicked.
* Gets the keyword from the input field and makes a request to the backend endpoint (http://localhost:3000/search) with the keyword as a query parameter.
* Parses the JSON response from the backend, which contains image sources.
* Clears the results container to remove any previous search results.
* Iterates over the image sources, creating an img element for each and setting its src attribute to the image source. Each img element is then appended to the results container, displaying the images on the page.

This combination of backend and frontend allows users to search for images via a keyword. The backend fetches and processes image search results from Google, and the frontend displays these images to the user.
</details>