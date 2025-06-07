"use client"

import { RegistrationForm } from "./_components/registration-form";


export default function RegisterPage() {
  return (
    <div className="h-screen w-screen bg-black text-white">
      <div className="flex h-full w-full items-center justify-center">
        <div>
          <h4 className="text-xl font-semibold tracking-wide">Register</h4>
          <p className="my-2 text-sm opacity-50">
            Create an Account and start earning.
          </p>
          <div>
            <RegistrationForm />
          </div>
          <p className="my-2 text-sm opacity-50">
            Already have an account? <span><a href="/auth/signin" className="hover:underline">Sign in</a></span>
          </p>
        </div>
      </div>
    </div>
  );
}
