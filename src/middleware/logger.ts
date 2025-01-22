import { Router } from "express";
import chalk from "chalk";

const router = Router();

router.use((req, res, next) => {
  res.on("finish", () => {
    const statusCode = res.statusCode;

    const timestamp = `[${new Date().toUTCString()}]`;
    const status = `[${statusCode} ${res.statusMessage}]`;
    const url = decodeURI(req.originalUrl);

    const logMessage = `${timestamp} ${status} ${url}`;

    // Color code logs based in HTTP status code
    switch (true) {
      case statusCode >= 200 && statusCode < 300:
        console.log(chalk.green(logMessage));
        break;

      case statusCode >= 400 && statusCode < 500:
        console.log(chalk.yellow(logMessage));
        break;

      case statusCode >= 500 && statusCode < 600:
        console.log(chalk.red(logMessage));
        break;

      default:
        console.log(chalk.cyan(logMessage));
        break;
    }
  });
  next();
});

export default router;
