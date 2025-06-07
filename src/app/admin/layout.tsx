
import { ReactNode } from "react";


import { AdminSidebar } from "./_components/admin-sidebar";
import { HeaderBar } from "./_components/header-bar";
import { Providers } from "@/components/providers";



export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full">
      <Providers>
        <div className="flex w-full md:flex-row">
          <AdminSidebar />
          <div className="w-full">
            <HeaderBar />
            <div className="bg-muted p-2">{children}</div>
          </div>
        </div>
      </Providers>
    </div>
  );
}
