import morgan from "morgan";
import logger from "../utils/logger";

const stream = {
  write: (message: string) => {
    logger.info(message.trim());
  },
};

const morganMiddleware = morgan("dev", { stream });

export default morganMiddleware;
