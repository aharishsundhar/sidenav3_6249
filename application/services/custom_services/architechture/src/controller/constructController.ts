import { Request, Response } from 'express';
import { constructService } from '../service/constructService';
import { CustomLogger } from '../config/Logger'
let construct = new constructService();

export class constructController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
construct.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into constructController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from constructController.ts: GpCreate');
    })}


}