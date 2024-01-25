import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEdit } from "@/hooks/use-edit";
import { useView } from "@/hooks/use-view";
import { Project } from "@/types";
import axios from "axios";

import { Eye, MoreHorizontal, Pencil, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProjectOptionsProps {
  project: Project;
}

export const ProjectOptions: React.FC<ProjectOptionsProps> = ({ project }) => {
  const edit = useEdit();
  const view = useView();
  const router = useRouter();

  const handleViewClick = () => {
    view.onOpen(project);
  };

  const handleEditClick = () => {
    edit.onOpen(project);
  };

  const handleDelete = async () => {
    try {
      const { id } = project;
      await axios.delete(`/api/project`, {
        data: {
          id,
        },
      });
      console.log("Project deleted with ID:", id);
    } catch (error) {
      console.error(error);
    }
    console.log("Mi id:", project.id);
    router.push("/home");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <MoreHorizontal />
      </PopoverTrigger>
      <PopoverContent className="w-30">
        <div className="flex gap-x-2">
          <Eye
            onClick={handleViewClick}
            className="hover:cursor-pointer hover:text-primary/40"
          />
          <Pencil
            onClick={handleEditClick}
            className="hover:cursor-pointer hover:text-primary/40"
          />
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Trash className="hover:cursor-pointer hover:text-primary/40" />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <form>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    ¿Quieres eliminar el proyecto?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Esta acción no se puede deshacer. Esto eliminará
                    permanentemente el proyecto y eliminará los datos del
                    servidor.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction type="submit" onClick={handleDelete}>
                    Eliminar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </form>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </PopoverContent>
    </Popover>
  );
};
