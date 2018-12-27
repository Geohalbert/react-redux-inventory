import express from "express";
import bodyParser from "body-parser";
import PartRoutes from "./Routes/PartRoutes";

import mongoose from "mongoose";
mongoose.set("debug", true);
mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://geohalbert:4ghhuFff@ds153978.mlab.com:53978/tonyromo");
mongoose.connect("mongodb://geohalbert:4ghhuFff@ds161539.mlab.com:61539/donhewlett");

const app = express();
app.use(bodyParser.json());
app.use(PartRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
