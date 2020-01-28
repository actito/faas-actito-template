import { Response, Request } from "express";
import { TActitoContext } from "@actito/dms-sdk/dist/routing";

export const handler = async (req: Request, res: Response, context: TActitoContext) => {
  try {
    res.status(200).send(`${context.environment} - ${context.license}`);
  } catch (err) {
    res.status(400).send(err.toString());
  }
};
