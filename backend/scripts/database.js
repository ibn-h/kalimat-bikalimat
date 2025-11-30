import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function initializeDatabase() {
  // Open a database handle
  const db = await open({
    filename: "./quran.db",
    driver: sqlite3.Database,
  });

  return db;
}
