
"use client"

import { CreditCard, PackageOpen, Users } from "lucide-react";

const navList = [
  {
    icon: <Users />,
    pathname: "Users",
    href: "/admin/users",
  },
  {
    icon: <PackageOpen />,
    pathname: "Packages",
    href: "/admin/packages",
  },
  {
    icon: <Users />,
    pathname: "Gateways",
    href: "/admin/payments",
  },
  {
    icon: <CreditCard/>,
    pathname: "Transactions",
    href: "/admin/transactions",
  },
];
export const AdminSidebar = () => {
  return (
    <div className="flex h-screen bg-black text-sm font-semibold tracking-wide text-white md:w-[300px]">
      <div className="flex flex-col items-center space-y-6 md:px-4">
        <span className="block w-full px-1 py-4 text-start text-lg font-bold md:pl-0">
          <a href="/">BTFX</a>
        </span>
        <ul className="flex h-full flex-col justify-start gap-6">
          {navList.map((item, i) => (
            <li key={item.pathname} className="text-sm hover:underline">
              <a href={item.href} className="flex items-center gap-2">
                {item.icon}
                <span className="hidden flex-nowrap md:block">
                  {item.pathname}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="w-full text-center">DE</p>
      </div>
    </div>
  );
}

