"use server"

import { db } from "@/database/db";
import { users } from "@/database/schema";
import { RegisterSchema } from "@/validators"
import { eq } from "drizzle-orm";
import { typeToFlattenedError } from "zod";

type Response =
  | { success: true }
  | { success: false; error: string; statusCode: 500 }
  | {
      success: false;
      error: typeToFlattenedError<{ email: string; password: string }, string>;
      statusCode: 400;
    }
| { success: false; error: string; statusCode: 409 }

export async function signupUserAction(values: unknown): Promise<Response> {
    const parsedValues = RegisterSchema.safeParse(values);

    if (!parsedValues.success) {
        const errs = parsedValues.error.flatten()
        console.log(errs)
        return{success: false, error: errs, statusCode: 400}
    }
    
    const { email, password } = parsedValues.data
    
    try {
        const existingUser = await db.select().from(users).where(eq(users.email, email.toLowerCase())).then((res) => res[0] ?? null);

        if (existingUser) {
            return {success: false, error: "Email already exists", statusCode: 409}
        }
    } catch (error) {
        console.error(error);
        return {
          success: false,
          error: "Internal Server Error",
          statusCode: 500,
        };
    }
    const adminEmails = (process.env.ADMIN_EMAIL_ADDRESSES?.toLowerCase() || "").split(",")
        const isAdmin = adminEmails.includes(email);
   
    try {
        const newUser = await db
            .insert(users).values({
                email,
                password,
                role: isAdmin ? "admin" : "user"
            }).returning().then((res) => res[0])
        console.log(newUser)
        return {success: true}
    } catch (error) {
        return {
          success: false,
          error: "Internal Server Error",
          statusCode: 500,
        };
    }
}