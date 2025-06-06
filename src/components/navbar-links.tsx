"use client";

// import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { SignoutButton } from "@/components/signout-button";

// import { useSession } from "next-auth/react";
import { Loader2Icon } from "lucide-react";
// import { SignoutButton } from "./signout-button";

export const NavbarLinks = () => {
  // const session = useSession();

  const session = { status:""}
  switch (session.status) {
    case "loading":
      return <Loading />;
    case "unauthenticated":
      return <SignedOut />;
    case "authenticated":
      return <SignedIn />;
    default:
      return null;
  }
};

const Loading = () => {
  return (
    <li>
      <button >
        <Loader2Icon className="min-w-[8ch] animate-spin" />
      </button>
    </li>
  );
};

const SignedIn = () => {
  return (
    <>
      <li>
        <button >
          <Link href="profile" className="hover:bg-transparent hover:underline">Profile</Link>
        </button>
      </li>

      <li>
        {/* <SignoutButton /> */}
       
      </li>
    </>
  );
};

const SignedOut = () => {
  return (
    <>
      <li className="flex gap-2 font-semibold">
        <button>
          <Link href="/auth/signin">Login</Link>
        </button>
     /
        <button>
          <Link href="/auth/register">Register</Link>
        </button>
      </li>
    </>
  );
};
