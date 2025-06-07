"use server"

import { auth } from "@/auth"
import { db } from "@/database/db"
import { packages } from "@/database/schema"
import { USER_ROLES } from "@/lib/constants"
import { CreatePackageSchema } from "@/validators"
import { eq } from "drizzle-orm"

export async function getAllPackageAction() { 

    const session = await auth()

    if(session?.user?.role !== USER_ROLES.ADMIN) throw new Error("Unauthorized")

    try {
        const allPackages = await db.select().from(packages)
        return allPackages
    } catch (error) {
        console.log(error)
    }
}

export async function createPackageAction(values: unknown) {
    // check if logged in user is an admin first
    

    //check values is consistent with schema
    const parsedValues = CreatePackageSchema.safeParse(values)

    
    if (!parsedValues.success) {
        const err = parsedValues.error.flatten()
        console.log(err)

        return {success: false, error: err, statusCode: 400}
    }


    const { min, max, packageName, duration, profitPercentage } = parsedValues.data;
    
    //check if package already exists
    try {
        const existingPackage = await db.select().from(packages).where(eq(packages.name, packageName.toLowerCase())).then((res) => res[0] ?? null)

        if (existingPackage) {
          return {
            success: false,
            error: "Package already exists",
            statusCode: 409,
          };
        }
    } catch (error) {
        console.error(error);
        return {
          success: false,
          error: "Internal Server Error",
          statusCode: 500,
        };
    }

    //Create new package

    try {
        const newPackage = await db.insert(packages).values({
            name: packageName,
            minInvestment: min,
            maxInvestment: max,
            profitPercentage,
            durationDays:duration
        }).returning().then((res) => res[0])
        console.log(newPackage)
        return { success: true }
    } catch (error) {
        return {
          success: false,
          error: "Internal Server Error",
          statusCode: 500,
        };
    }

    
}

