"use client";

import { Sidebar } from "@/components/sidebar";
import { Spinner } from "@/components/spinner";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function MainLayout ({
    children
}: {children: React.ReactNode}) {
    const {isLoaded, isSignedIn} = useAuth()

    if(!isLoaded) {
        return (
            <div className="h-full flex items-center justify-center mt-[25%]">
                <Spinner />
            </div>
        )
    }

    if(!isSignedIn) {
        return redirect("/")
    }

    return (
        <div className="h-full flex w-screen bg-[#F0F0F0] dark:bg-[#1F1F1F]">
            <Sidebar />
            {children}
        </div>
    )
}