import { actitoApi, TActitoContext } from "./actito/api";
import { Response, Request } from "express";

export const handler = async (req: Request, res: Response, context: TActitoContext) => {
  try {
    const entities = await actitoApi(context, "GET", "v4/entity/");
    res.status(200).send(entities);
  } catch (err) {
    res.status(400).send(err.toString());
  }
};
