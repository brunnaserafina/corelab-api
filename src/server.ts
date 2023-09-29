import app, { init } from "./app";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

init().then(() => {
  app.listen(port, () => {
    /* eslint-disable-next-line no-console */
    console.log("Running on port " + port);
  });
});
