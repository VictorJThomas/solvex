"use client";

import { useUser } from "@clerk/nextjs";
import { ProjectsTable } from "./_components/projects-table";
import { Plus } from "lucide-react";
import { useCreate } from "@/hooks/use-create";

const HomePage = () => {
  const { user } = useUser();
  const create = useCreate()

  return (
    <div className="p-16">
      <h1 className="text-6xl font-bold pb-16">Proyectos</h1>
      <div className="pb-1 pl-4">
        <Plus onClick={create.onOpen} className="h-20 w-14 transition ease-in-out hover:animate-pulse hover:cursor-pointer" />
      </div>
      <ProjectsTable />
    </div>
  );
};

export default HomePage;
