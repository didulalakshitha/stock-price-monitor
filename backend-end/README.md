# Stock Price Monitor - Backend App

Backend application for monitoring stock prices

## Executing program

In the project directory, you can run:

### `npm install`
Install the libraries

### `npm start`
Run the app in the develop mode.\
Http server will start in http://localhost:4000 \
Socket connestion will start in http://localhost:3001

### `npm test`
Executes the test cases.

## Note
There is a requirement to update the stock prices periodically. This is handled using the infinite callback in every 5 seconds.\
No advanced mechanism is used such as cron jobs and service messages since no exact details are mentioned.
