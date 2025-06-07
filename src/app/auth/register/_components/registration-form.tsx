import { signupUserAction } from "@/actions/signup-user-action";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Enter a valid email." }),
  password: z
    .string()
    .min(6, { message: "password must be at least 8 characters." }),
}); 

export const RegistrationForm = () => {

  const [success, setSuccess] = useState(false)
  const router = useRouter()
  
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
})
  
const { handleSubmit, control, formState } = form;
  
  async function onSubmit(values: z.infer<typeof formSchema>) {

    const response = await signupUserAction(values)

    if (response.success) {
      setSuccess(true)
      router.push("/success")
    } else {
      // console.log(error)
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
                  placeholder="e.g. johndoe@email.com"
                  {...field}
                  className="form h-12 rounded-sm outline-none"
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
        <Button
          disabled={formState.isSubmitting}
          type="submit"
          className="hover: h-12 w-full rounded-sm bg-orange-500 text-sm tracking-widest text-black hover:bg-orange-600"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
