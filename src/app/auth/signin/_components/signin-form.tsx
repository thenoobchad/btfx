"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signinUserAction } from "@/actions/signin-user-action"


const formSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(6, {message: "password must be at least 8 characters."})
})

export const SigninForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })


  const { handleSubmit, control, formState, setError } = form;
  
  
  async function onSubmit(values: z.infer<typeof formSchema>) {

    const res = await signinUserAction(values);

    if (res.success) {
      window.location.href = "/profile"
    } else {
      switch (res.statusCode) {
        // case 401:
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. johnny67@mail.com"
                  {...field}
                  className="form h-12 rounded-sm outline-none "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. ********"
                  {...field}
                  className="h-12 rounded-sm outline-none active:border-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={formState.isSubmitting} type="submit" className="h-12 rounded-sm text-sm tracking-widest bg-orange-500 text-black hover: hover:bg-orange-600 w-full">Submit</Button>
      </form>
    </Form>
  ); 
}
