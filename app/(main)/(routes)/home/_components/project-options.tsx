import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEdit } from "@/hooks/use-edit";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";

export const ProjectOptions = () => {
    const edit = useEdit()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <MoreHorizontal />
      </PopoverTrigger>
      <PopoverContent className="w-30">
        <div className="flex gap-x-2">
          <Pencil 
            onClick={edit.onOpen}
            className="hover:cursor-pointer hover:text-primary/40"
          />
          <Trash className="hover:cursor-pointer hover:text-primary/40"/>
        </div>
      </PopoverContent>
    </Popover>
  );
};
