const express = require("express");
const cors = require("cors");

require("./modules/notification/notification.listener");

const schedulingRoutes = require("./modules/scheduling/scheduling.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API funcionando");
});

app.use("/agendamentos", schedulingRoutes);

module.exports = app;