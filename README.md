# Stock Price Monitor
Monitoring the stock prices in various sources. 


## Description
The application to monitor the stok pricesfrom variaous sources.

This contains two modules.
* front-end
* back-end

### front-end
The frontend application developed in React and Redux. 

### back-end
The backend application developed in NodeJS, express. 

## Note
* Mock data is stored in memory. (No database is used)
* Stock prices of all tickers are fetched since this is very simple application.
* There is a requirement to update the stock prices periodically. This is handled using the infinite callback in every 5 seconds. No advanced mechanism is used such as cron jobs and service messages since no exact details are mentioned.
* Considered two price sources and each one has unique tickers. 


## Installation
Refer the readme file in each moodule. It contains the steps and commands to execute the application. 
* [README - Frontend App](https://github.com/didulalakshitha/stock-price-monitor/tree/master/front-end#readme) 
* [README - Backend App](https://github.com/didulalakshitha/stock-price-monitor/tree/master/backend-end#readme)
