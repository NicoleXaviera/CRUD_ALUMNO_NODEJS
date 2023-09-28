import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "crudnodejs.cqv1do4jd2wh.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "Tecsup2023",
  port: 3306,
  database: "crudnodejs",
});
