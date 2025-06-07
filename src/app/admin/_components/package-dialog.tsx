"use client"

import { Pen, PencilIcon, Plus, PlusIcon, PlusSquare, PlusSquareIcon, Trash, } from "lucide-react";


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  
  import {
    Form,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
    FormField,
} from "@/components/ui/form";
  import { z } from "zod";
  
import { Input } from "@/components/ui/input";
  
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  createPackageAction,
  getAllPackageAction,
} from "@/actions/admin-action/package";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";


const CreatePackageSchema = z.object({
  packageName: z.string(),
  min: z.coerce.number(),
  max: z.coerce.number(),
  duration: z.coerce.number(),
  profitPercentage: z.coerce.number(),
});


type CreatePackageSchemaProps = {
  packageName: string,
  min: number,
  max:number,
  duration: number,
  profitPercentage: number
}


export const PackageDialog = () => {

      
      const [success, setSuccess] = useState("");
  
      // const { data: session, update } = useSession();
      const router = useRouter();
  
      const form = useForm({
        resolver: zodResolver(CreatePackageSchema),
        defaultValues: {
          packageName: "",
            min: 0,
            max: 0,
          duration: 0,
          profitPercentage:0,
        },
      });
  
  const { handleSubmit, control, formState, setError } = form;
  
   const submit = async (values: CreatePackageSchemaProps) => {
      console.log(values)
  
      const response = await createPackageAction(values)
      if (response.success) {
        // setSuccess(true);
        router.refresh();
        setSuccess("Package created successfully.");
        
      } 
   };
  
  
  return (
    <Dialog>
    <DialogTrigger asChild>
      <button className="flex cursor-pointer items-center gap-2 rounded-xs bg-green-800 p-1 font-semibold text-white">
        <PlusIcon />
      </button>
    </DialogTrigger>

    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create Package</DialogTitle>

        <DialogDescription>
          Enter details to create Package
        </DialogDescription>

        <Form {...form}>
          <form onSubmit={handleSubmit(submit)} className="space-y-4">
            <FormField
              control={control}
              name="packageName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Package Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="min"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Minimum Amount</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="max"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Amount</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <FormField
                control={control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration (days)</FormLabel>

                    <FormControl>
                      <select
                        className="w-full"
                        name="duration"
                        id="duration"
                        onChange={field.onChange}
                        value={field.value}
                      >
                        <option value="" disabled>
                          Select duration
                        </option>
                        <option value="30">30</option>
                        <option value="60">60</option>
                        <option value="90">90</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="profitPercentage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Percentage</FormLabel>
                    <FormControl className="w-full">
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {success && (
              <p className="text-sm font-medium text-green-600">
                {success}
              </p>
            )}

            <FormField name="id" render={() => <FormMessage />} />

            <Button
              type="submit"
              disabled={formState.isSubmitting}
              className="w-full"
            >
              Create
            </Button>
          </form>
        </Form>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}
