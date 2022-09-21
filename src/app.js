import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import ping from "./routes/index.routes.js";
const app = express();

app.use(express.json());

// endpoints
app.use(ping);
app.use("/api", employeesRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    message: "not found",
  });
});

export default app;
