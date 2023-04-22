import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "assignment",
  })
  .promise();

export const searchUser = async (email) => {
  const [user] = await pool.query(`SELECT * FROM user WHERE email = ?`, [
    email,
  ]);
  return user;
};

export const getUser = async (email, password) => {
  const [user] = await pool.query(
    `SELECT * FROM user WHERE email = ? AND password = ?`,
    [email, password]
  );
  return user;
};

export const createUser = async (email, password) => {
  const [user] = await pool.query(
    `INSERT INTO user (email, password) VALUES (?, ?)`,
    [email, password]
  );
  return getUser(email, password);
};
