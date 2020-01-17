import { Request, Response } from "express-serve-static-core";

module.exports = async (req: Request, res: Response) => {
  const result = {
    status: "You said: " + JSON.stringify(req.body)
  };
  res.status(200).send(result);
};
