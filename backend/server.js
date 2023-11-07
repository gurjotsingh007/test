const express = require('express');
const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
const path = require('path');

dotenv.config({ path: 'backend/config/config.env' });

async function startServer() {
  try {
    await connectDatabase();

    const __dirname = path.resolve();

    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, 'frontend', 'build')));

      app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')
      ));
    } else {
      app.get('/', (req, res) => {
        res.send('API is running....');
      });

      const server = app.listen(process.env.PORT, process.env.HOST, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });
    }

    // Handling unhandled exceptions
    process.on('uncaughtException', (err) => {
      console.error(`Uncaught Exception: ${err.message}`);
      shutdown(server);
    });

    // Handling unhandled promise rejections
    process.on('unhandledRejection', (err) => {
      console.error(`Unhandled Promise Rejection: ${err.message}`);
      shutdown(server);
    });
  } catch (err) {
    console.error(`Error during server start: ${err.message}`);
  }
}

function shutdown(server) {
  console.log('Shutting Down the Server');
  server.close(() => {
    process.exit(1);
  });
}

startServer();
