import { relations } from "drizzle-orm";
import { index, int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import {v4 as uuidv4} from "uuid"



export const users = sqliteTable(
  "users",
  {
    id: text("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => uuidv4()),
    username: text(),
    email: text().notNull().unique(),
    password: text().notNull(),
    role: text("role", { enum: ["user", "admin"] })
      .notNull()
      .default("user"),
  },
  // (table) => ({
  //   emailIdIdx: index("users_id_idx").on(table.email),
  // }),
);

export const accounts = sqliteTable(
  "accounts",
  {
    id: text("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => uuidv4()),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    balance: real("balance").notNull().default(0.0),
    createdAt: int("created_at", { mode: "timestamp" })
      .notNull()
      .default(new Date()),
    updatedAt: int("updated_at", { mode: "timestamp" })
      .notNull()
      .default(new Date()),
  },
  // (table) => ({
  //   userIdIdx: index("transactions_user_id_idx").on(table.userId),
   
  // }),
);


export const packages = sqliteTable("packages", {
  id: text("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => uuidv4()),
  name: text("name").notNull(),
  minInvestment: real("min_investment").notNull(),
  maxInvestment: real("max_investment").notNull(),
  durationDays: int("duration_days").notNull(),
  profitPercentage: real("profit_percentage").notNull(),
  isActive:int("is_active", {mode: "boolean"}).notNull().default(true),
  createdAt: int("created_at", { mode: "timestamp" })
    .notNull()
    .default(new Date()),
  updatedAt: int("updated_at", { mode: "timestamp" })
    .notNull()
    .default(new Date()),
});

export const transactions = sqliteTable(
  "transactions",
  {
    id: text("id", { length: 36 })
      .primaryKey()
      .$defaultFn(() => uuidv4()),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    accountId: int("account_id")
      .notNull()
      .references(() => accounts.id, { onDelete: "cascade" }),

    packageId: text("package_id").references(() => packages.id, {
      onDelete: "set null",
    }),
    type: text("type").notNull(),
    amount: real("amount").notNull(),
    status: text("status").notNull(),
    createdAt: int("created_at", { mode: "timestamp" })
      .notNull()
      .default(new Date()),
    updatedAt: int("updated_at", { mode: "timestamp" })
      .notNull()
      .default(new Date()),
  },
  // (table) => ({
  //   userIdIdx: index("transactions_user_id_idx").on(table.userId),
  //   accountIdIdx: index("transactions_account_id_idx").on(table.accountId),
  //   packageIdIdx: index("transactions_package_id_idx").on(table.packageId),
  // }),
);

//Relationsusers

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  transactions: many(transactions)
}))

export const accountsRelations = relations(accounts, ({ one, many }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id]
  }),
  transactions: many(transactions)
}))

export const transactionsRelations = relations(transactions, ({one }) => ({
  user: one(users, {
    fields: [transactions.userId],
    references: [users.id]
  }),

  account: one(accounts, {
    fields: [transactions.accountId],
    references: [accounts.id],
  }),

  package: one(packages, {
    fields: [transactions.packageId],
    references: [packages.id],
  })
}))