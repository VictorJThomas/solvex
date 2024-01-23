import { UserItem } from "@/app/(main)/(routes)/home/_components/user-item";
import { FolderKanban } from "lucide-react";

export const Sidebar = () => {

  return (
    <>
      <aside className="h-screen p-1 overflow-y-auto relative flex w-50 flex-col #f0f0f0 dark:bg-[#0F0F0F]">
        <div className="p-2 flex items-center justify-center font-semibold gap-2">
          <FolderKanban className="h-10 w-10" />
          <p className="text-lg text-muted-foreground">
            <span className="font-bold">User</span> Management
          </p>
        </div>
        <div className="m-4 px-4">
          <p className="text-muted-foreground">Actividad Reciente</p>
        </div>
        <div className="mt-auto pb-4 mx-2">
          <UserItem />
        </div>
        <div className="opacity-80 trainstion absolute h-full w-[2px] bg-primary/10 right-0 top-0" />
      </aside>
    </>
  );
};
