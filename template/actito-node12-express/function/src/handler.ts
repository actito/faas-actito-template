import { Response, Request } from "express";

export type TActitoContext = {
  license: string;
  credentials: string;
};

export const handler = async (req: Request, res: Response, context: TActitoContext) => {
  try {
    res.status(200).send(context.license);
  } catch (err) {
    res.status(400).send(err.toString());
  }
};
