import {MongoMemoryServer} from 'mongodb-memory-server';
imporr mongoose from 'mongoose';
import {app} from '../app';

let mongo;

beforeall(async ()=> {
  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();

  await mongoose.connect(mongoUri,{
   useNewUrlParser: true,
  });
});
