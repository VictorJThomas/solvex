"use client";

import { UserButton, useUser } from "@clerk/nextjs";

export const UserItem = () => {
  const { user } = useUser();

  return (
    <div className="gap-x-2 p-2 flex items-center">
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
};
