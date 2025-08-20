/****************************************************/
/*
either load the variables from environement or use default values
environement variables willb be populated by the hosting environment or will be loaded from .env file using dotenv
*/
/****************************************************/
import dotenv from "dotenv";
let clientURLS = [];
let adminURLS= [];
const environment = process.env.Environment;
let BLOB_READ_WRITE_TOKEN =
  "vercel_blob_rw_nSVZogblPOrEptLk_I8r8UlA2bYNTxrk0vHdU9EuyEqFqKO"; //my account is limite to one free blob so im sharing this between two apps, will need to be changed later

let MULTER_UPLOAD;

if (environment != "production") {
  dotenv.config();
  clientURLS = ["http://localhost:5173"];
  adminURLS = ["http://localhost:5174"];
  MULTER_UPLOAD = "temp/";
} else {
  adminURLS = ["https://homease-admin.vercel.app"];
  clientURLS = ["https://homease.vercel.app"];
  MULTER_UPLOAD = "/tmp";
}

const secret = process.env.secret || "what is a secret bruh";

export {
  secret,
  environment,
  clientURLS,
  adminURLS,
  BLOB_READ_WRITE_TOKEN,
  MULTER_UPLOAD,
};
