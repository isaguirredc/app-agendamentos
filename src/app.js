const express = require("express");
const cors = require("cors");
const path = require("path");

require("./modules/notification/notification.listener");

const schedulingRoutes = require("./modules/scheduling/scheduling.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use("/agendamentos", schedulingRoutes);

module.exports = app;