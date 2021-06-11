
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const constructSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   designer_name: String
})

const constructModel = mongoose.model('construct', constructSchema, 'construct');
export default constructModel;
