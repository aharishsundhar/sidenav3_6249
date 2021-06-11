import { Request, Response } from 'express';
import {constructDao} from '../dao/constructDao';
import { CustomLogger } from '../config/Logger'
let construct = new constructDao();

export class constructService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into constructService.ts: GpCreate')
     const  constructData = req.body;
     construct.GpCreate(constructData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from constructService.ts: GpCreate')
         callback(response);
         });
    }


}