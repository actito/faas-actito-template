import fetch from "node-fetch";
import { buildHeader } from "./authenticate";

export const rootV4 = `https://test.actito.be/ActitoWebServices/ws/`;
export const rootV5 = "https://test.actito.be/actito-publicapi/";

export type TMethod = "GET" | "POST" | "DELETE" | "PUT";
export type TBody = object;

export async function actitoApi(
  context: TActitoContext,
  method: TMethod,
  path: string,
  body: TBody = {}
) {
  const { credentials } = context;
  const actitoRoot = path.startsWith("v5") ? rootV5 : rootV4;
  const bodyParams =
    Object.keys(body).length > 0 ? { body: JSON.stringify(body) } : undefined;
  const fetchParams = {
    method,
    headers: buildHeader(credentials),
    ...bodyParams
  };
  return await fetch(`${actitoRoot}${path}`, fetchParams).then(response => {
    if (response.ok) {
      return method === "DELETE" ? {} : response.json();
    } else throw new Error(response.statusText);
  });
}
