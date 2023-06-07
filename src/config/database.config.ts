import { DataSource } from "typeorm";
import env from "./env";

export const appDataSource = new DataSource({
  type: "mysql",
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD!,
  database: env.DATABASE_NAME,
  synchronize: true, //prodcution ma false
  logging: true,
  entities: [__dirname + "\\..\\entity\\*.entity{.ts,.js}"],
  dropSchema: false,
});

// __dirname + "../entity/*.entity.ts"
