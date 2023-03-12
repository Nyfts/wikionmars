import { Response } from "express"

function ok(data: any, res: Response) {
  return res.status(200).send({
    data
  });
}

export default { ok }
