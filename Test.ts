import {MongoMemoryServer} from 'mongodb-memory-server';
imporr mongoose from 'mongoose';
import {app} from '../app';

let mongo;

beforeall(async ()=> {
  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();

  await mongoose.connect(mongoUri,{
   useNewUrlParser: true,
   useUnifiedTopology: true
  });
});

beforeEach(async ()=> {
  const collections = await mongoose.connections.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async ()=> {
  await mongo.stop();
  await mongoose.connection.close();
  
});
