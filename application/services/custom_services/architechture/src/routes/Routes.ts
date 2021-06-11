import { Request, Response, NextFunction } from "express";
import { constructController } from '../controller/constructController';


export class Routes {
    private construct: constructController = new constructController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/construct').post(this.construct.GpCreate);
     }

}