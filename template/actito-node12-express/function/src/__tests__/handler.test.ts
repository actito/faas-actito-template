import { handler } from "../handler";
import express from "express";

describe("testing function", () => {
  it("responds correclty", async () => {
    const send = jest.fn(console.log);
    const res: express.Response = ({
      status: (code: number) => ({ send })
    } as any) as express.Response;

    const req = ({} as any) as express.Request;
    await handler(req, res, {
      environment: "test",
      license: "license",
      credentials: "my credentials"
    });
    expect(send).toHaveBeenCalledWith("test - license");
  });
});
