"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter()

  const explore = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.push("/home")
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {!isLoaded && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isSignedIn && isLoaded && (
        <Button onClick={explore}>
            Acceder
            <ArrowRight className="h-4 w-4 ml-2"/>
        </Button>
      )}
      {!isSignedIn && isLoaded && (
        <SignInButton mode="modal">
            <Button>
                Iniciar Sesion
                <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
        </SignInButton>
      )}
    </div>
  );
};
