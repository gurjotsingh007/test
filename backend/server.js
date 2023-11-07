const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

async function startServer() {
  try {
    dotenv.config({ path: "backend/config/config.env" });
    await connectDatabase();

    const port = process.env.PORT;

    const server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    // Handling unhandled exceptions
    process.on("uncaughtException", (err) => {
      console.error(`Uncaught Exception: ${err.message}`);
      shutdown(server);
    });

    // Handling unhandled promise rejections
    process.on("unhandledRejection", (err) => {
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