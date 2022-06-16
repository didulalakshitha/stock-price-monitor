const express = require('express');
const priceRouter = require('./routers/priceRouter');
const dataGenerateController = require('./controllers/dataGenerate/dataGenerateController');
const priceController = require('./controllers/price/priceController');
const socketIo = require('socket.io');
const http = require('http');
const cors = require('cors');

const app = express();
const data_timeout = 3000;

app.use(cors());

app.use('/stock', priceRouter);

app.use(function(err, req, res, next) {
  res.status(500).send({
    title: 'Internal Server Error',
    error: err.message,
  });
});

const server = http.createServer();
const io = socketIo(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log('client connected: ',socket.id);

  socket.join('stock-prices');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

server.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

async function generatePriceData() {
  while(true) {
    await new Promise(resolve => {
      setTimeout(() => {
        dataGenerateController.generateData();
        console.log('Generated');

        const prices = priceController.getPrices();
        io.to('stock-prices').emit('prices', prices);
        resolve('Generated');
      }, data_timeout);
    });
  }
}

generatePriceData();
