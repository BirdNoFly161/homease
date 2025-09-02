// const mongodb_user_name = "sharpoussama";
// const mongodb_user_password = "rC90rht0ZA9dKRtf";
// const database_name = "pressingshop"
import { env_config } from "../configs/environment.js";

//export const uri = `mongodb+srv://${mongodb_user_name}:${mongodb_user_password}@testcluster.amyjknf.mongodb.net/${database_name}?retryWrites=true&w=majority`;
// export const uri = `mongodb+srv://${env_config.dbUser}:${env_config.dbPassword}@cluster0.gx7stm3.mongodb.net/${database_name}?retryWrites=true&w=majority&appName=Cluster0`;

export const uri = `mongodb+srv://${env_config.dbUser}:${env_config.dbPassword}@${env_config.dbCluster}.mongodb.net/${env_config.dbName}?retryWrites=true&w=majority`