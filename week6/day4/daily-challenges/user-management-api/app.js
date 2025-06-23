import express from "express";
import router from "./routes/usersRoutes.js";
const app = express();

const PORT = 5000;
app.use(express.static("public"));
app.use("/", router);

app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});
