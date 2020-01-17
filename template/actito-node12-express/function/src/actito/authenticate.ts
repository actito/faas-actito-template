export const actitoTestV4 = `https://test.actito.be/ActitoWebServices/ws/v4`;
export const actitoTestV5 = "https://test.actito.be/actito-publicapi/v5";

export const buildHeader = (credentials: string) => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Basic " + Buffer.from(credentials).toString("base64")
});
