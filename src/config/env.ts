import "dotenv/config";

class Env {
  static NODE_ENV = process.env.NODE_ENV;
  static PORT = +process.env.PORT!;

  static DATABASE_HOST = process.env.DATABASE_HOST;
  static DATABASE_PORT = +process.env.DATABASE_PORT!;
  static DATABASE_USERNAME = process.env.DATABASE_USERNAME;
  static DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
  static DATABASE_NAME = process.env.DATABASE_NAME;
}

export default Env;
