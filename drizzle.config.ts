
import { any, string } from "zod";
import { env } from "~/env";


export default {
  schema:  "./src/server/db/schema.ts"
  dialect: "postgresql",
  dbCredentials: {
   POSTGRES_URL:env.POSTGRES_URL,
  },
  tablesFilter:  ["t3gallery_*"],
} 

