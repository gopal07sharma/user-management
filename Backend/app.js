import express, { application } from 'express'
import dotenv from 'dotenv'
import { userRoute } from './module/route/user-route.js';
 
 const App = express();
 dotenv.config()
 App.use(express.json())
 App.use('/', userRoute)


const server =  App.listen(process.env.MY_PORT || 1234 , ()=>{
 try{
  console.log('listening to this port ', server.address().port);
 }catch(err){
console.log('Error ', err);
 }
})