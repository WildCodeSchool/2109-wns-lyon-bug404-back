import dotenv from "dotenv";

dotenv.config();

export const config =  
{
  'server' : process.env.SERV,
  'host' : process.env.DB_HOST,
  'db' : process.env.DB,
  'db_uname' : process.env.DB_USER,
  'db_password' : process.env.DB_PASS,
  'port' : process.env.DB_PASS,
}