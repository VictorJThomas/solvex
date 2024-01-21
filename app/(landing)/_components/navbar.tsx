"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { FolderKanban } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const scrolled = useScrollTop();
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <div
      className={cn(
        "z-50 bg-[#f0f0f0] dark:bg-[#0F0F0F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="p-2 flex items-center justify-center font-semibold gap-2">
        <FolderKanban className="h-14 w-14"/>
        <p className="text-xl text-muted-foreground">
          <span className="font-bold">User</span> Management
        </p>
      </div>
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {!isLoaded && <Spinner />}
        {isLoaded && !isSignedIn && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">Iniciar Sesion</Button>
            </SignInButton>
          </>
        )}
        {isLoaded && isSignedIn && (
          <>
              <Button variant="ghost" size="sm">
                <Link href="/home">Acceder</Link>
              </Button>
              <UserButton 
                afterSignOutUrl="/"
              />
          </>
        )}
      </div>
    </div>
  );
};
