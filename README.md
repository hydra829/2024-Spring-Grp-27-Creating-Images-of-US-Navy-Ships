# 2024-Spring-Grp-27-Creating-Images-of-US-Navy-Ships
Running the provided Node.js and HTML code in Visual Studio Code (VS Code) involves a few simple steps. Here's a guide on how to do it:

Setting Up Your Project
Install Node.js: Make sure Node.js is installed on your system. If it's not installed, you can download and install it from nodejs.org.

Create a Project Directory: Create a new directory for your project. This directory will contain both your backend (Node.js) and frontend (HTML) code.

Open VS Code: Open Visual Studio Code and open the project directory you just created.

Backend Setup
Create Backend Files: Inside your project directory, create a new file for your Node.js server, e.g., server.js.

Install Dependencies:

Open the VS Code terminal (Terminal > New Terminal).
In the terminal, run npm init -y to create a package.json file.
Install required packages by running npm install express cors axios cheerio.
Paste the Backend Code: Copy the Node.js backend code I provided earlier into server.js.

Frontend Setup
Create Frontend File: Create an HTML file for your frontend, e.g., index.html.

Paste the Frontend Code: Copy the HTML code into index.html.

Running the Backend
Start the Server:
In the VS Code terminal, run node server.js.
This will start the server on localhost and the specified port (e.g., 3000).
Running the Frontend
Open HTML File in a Browser:
Right-click on index.html in VS Code.
Select Open with Live Server if you have the Live Server extension installed, or simply open the file in your web browser.
Testing the Application
Use the Application:
In the browser where index.html is open, type a search query into the search bar and click the search button.
The server should process the request, and your frontend should display the resulting images.
Additional Tips
Live Server Extension: For a better experience with the frontend, you can install the "Live Server" extension in VS Code. It allows you to open your HTML file with a live-reloading server.
Debugging: If something doesn't work, check the console in your web browser and the terminal in VS Code for any error messages.
Security Warning: Remember, the scraping script might break if the structure of Google Images changes, and scraping such sites may violate their terms of service.
Environment Variables: For a more secure and scalable application, consider using environment variables for things like ports or any sensitive information.
This setup provides a basic development environment for running and testing your Node.js and HTML code directly from VS Code.
