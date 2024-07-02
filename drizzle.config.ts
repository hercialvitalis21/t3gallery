
import { any, string } from "zod";
import { env } from "~/env";

export default {
  path: "./src/server/db/schema.ts",
  schema: string,
  dialect: "postgresql",
  dbCredentials: {
   POSTGRES_URL: any,
  },
  tablesFilter: "string[]",
  }

