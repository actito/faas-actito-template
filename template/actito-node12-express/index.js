// Copyright (c) Alex Ellis 2017. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

"use strict";

const express = require("express");
const app = express();
const handler = require("./function/build/handler");

app.use(express.json());
app.disable("x-powered-by");

var middleware = (req, res) => {
  handler(req, res);
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
