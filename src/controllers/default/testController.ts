import { Request, Response } from "express";
import AppResponse from "../../utils/AppResponse";

class TestController {
  async index(req: Request, res: Response) {
    return AppResponse.sendSuccess({
      res: res,
      data: null,
      message: "test",
      code: 200,
    });
  }
}

export default TestController;