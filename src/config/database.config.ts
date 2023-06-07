import { DataSource } from "typeorm";

console.log(__dirname, "dirname");
export const appDataSource = new DataSource({
  type: "mysql",
  port: 3306,
  host: "localhost",
  username: "root",
  password: "root",
  database: "learnsql",
  synchronize: true, //prodcution ma false
  logging: true,
  entities: [__dirname + "\\..\\entity\\*.entity{.ts,.js}"],
  dropSchema: false,
});

// __dirname + "../entity/*.entity.ts"
