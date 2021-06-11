import * as mongoose from 'mongoose';
import constructModel from '../models/construct';
import { CustomLogger } from '../config/Logger'


export class constructDao {
    private construct = constructModel;
    constructor() { }
public GpCreate(constructData, callback){
new CustomLogger().showLogger('info', 'Enter into constructDao.ts: GpCreate')
let temp = new constructModel(constructData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from constructDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}