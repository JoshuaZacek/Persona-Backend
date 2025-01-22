import express from "express";
import chalk from "chalk";

const app = express();
const port = 8080;

// Routes
import authRoutes from "./routes/auth.js";

// Middleare
import logger from "./middleware/logger.js";

// Middleware & Routes
app.use(logger);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(
    chalk.bold(chalk.bgGreen(`[ Persona Backend Started Successfully. Port: ${port} ]`))
  );
});
