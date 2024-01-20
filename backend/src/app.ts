import { createServer } from "./server";

const app = createServer();
const PORT: number = 3008;

app.listen(PORT, () => {
  console.log(
    `\x1b[35m=>\x1b[0m Server Port: \x1b[33m${PORT}\x1b[0m\n\x1b[35m=>\x1b[0m Server mode: \x1b[33m${process.env.NODE_ENV}\x1b[0m`
  );
});
