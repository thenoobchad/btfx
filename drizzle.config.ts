import { defineConfig } from "drizzle-kit";
import type { Config } from "drizzle-kit";



const DATABASE_URL = process.env.DATABASE_URL ?? ""

export default defineConfig({
	schema: "./src/database/schema.ts",
	out: "./src/database/migrations",
	dialect: "sqlite",
	dbCredentials: {
		url: DATABASE_URL,
	},
} satisfies Config);
