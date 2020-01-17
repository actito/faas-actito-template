// Copyright (c) Alex Ellis 2017. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

"use strict";

const express = require("express");
const app = express();
const { handler } = require("./hello-actito/build/handler");

app.use(express.json());
app.disable("x-powered-by");

function getActitoContext(req) {
  const actitoLicense = req.get("actito-license");
  const actitoCredentials = req.get("actito-credentials");
  if (actitoLicense === undefined || actitoCredentials === undefined)
    return undefined;
  return {
    license: actitoLicense,
    credentials: actitoCredentials
  };
}

var middleware = (req, res) => {
  const context = getActitoContext(req);
  if (context === undefined) {
    res.status(400).send("Invalid actito context");
    return;
  }
  handler(req, res, context);
};

app.post("/*", middleware);
app.get("/*", middleware);
app.patch("/*", middleware);
app.put("/*", middleware);
app.delete("/*", middleware);

const port = process.env.http_port || 3000;

app.listen(port, () => {
  console.log(`OpenFaaS actito listening on port: ${port}`);
});
