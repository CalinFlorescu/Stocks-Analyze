// libraries imports
const dotenv = require("dotenv");

// env variables
dotenv.config();

const PORT = process.env.PORT;

// internal imports
const initServer = require("./initServer");
const initRoutes = require("./initRoutes");

const app = initServer();
const server = initRoutes(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
