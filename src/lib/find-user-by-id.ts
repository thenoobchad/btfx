"use server"

import { db } from "@/database/db";
import { users } from "@/database/schema"
import { eq } from "drizzle-orm"

type UserWithoutPassword = Omit<typeof users.$inferSelect, "password">

export default async function findUserById(id: string):Promise<UserWithoutPassword> {
    

    const user = await db.select().from(users).where(eq(users.id, id)).then((res)=> res[0]??null)


  if (!user) throw new Error("User not found");
    const {password, ...userWthoutPassword} = user
    return userWthoutPassword;
}
