"use server"

import { signIn } from "@/auth"


export async function signinUserAction(values: unknown) {
    try {
        if (typeof values !== "object" || values === null || Array.isArray(values)) {
            throw new Error("Invalid JSON Object")
        }

        await signIn("credentials", { ...values, redirect: false });

        return {success: true}
    } catch (error) {
        console.log(error);
        return {
          success: false,
          error: "Internal Server Error",
          statusCode: 500,
        }; 
    }
}