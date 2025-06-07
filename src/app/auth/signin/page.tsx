"use client";

import { SigninForm } from "./_components/signin-form";

export default function SigninPage() {
  return (
    <div className="h-screen w-screen bg-black text-white">
      <div className="flex h-full w-full items-center justify-center">
        <div className="border-[0.2px] p-6 rounded-sm">
          <h4 className="text-xl font-semibold tracking-wide">Login</h4>
          <p className="my-2 text-sm opacity-50">Sign in to start earning.</p>
          <div className="w-[300px]">
            <SigninForm />
          </div>
          <p className="my-2 text-sm text-muted">
            Already have an account?{" "}
            <span>
              <a href="/auth/register" className="hover:underline">
                Sign up
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
