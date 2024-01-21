"use client";

import { useUser } from "@clerk/nextjs";

const HomePage = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div className="flex text-xl flex-col justify-center items-center px-8">
      <p>{user?.id}</p>
      <p>{user?.firstName}</p>
      <p>{user?.lastName}</p>
     <p>{user?.fullName}</p>
      <p>{user?.imageUrl}</p>
      <p>{user?.emailAddresses[0].emailAddress}</p>
    </div>
  );
};

export default HomePage;
