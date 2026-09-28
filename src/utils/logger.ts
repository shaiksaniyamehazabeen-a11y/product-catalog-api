import winston from "winston";
import path from "path";
import fs from "fs";

const logDir = path.join(process.cwd(), "logs");

// Create logs folder if it doesn't exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
    level: "info",

    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),

    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        }),

        new winston.transports.File({
            filename: path.join(logDir, "error.log"),
            level: "error"
        }),

        new winston.transports.File({
            filename: path.join(logDir, "all.log")
        })
    ]
});

export default logger;