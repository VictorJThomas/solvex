import { useView } from "@/hooks/use-view";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { useEffect, useState } from "react";

export const ViewProjectModal = () => {
  const view = useView();
  const [tasks, setTasks] = useState<string[]>([])

  const task = view.project?.tasks

  useEffect(() => {
    if(task) setTasks(task)
  }, [task])

  const formatCreatedAt = (createdAt: string): string => {
    const date = new Date(createdAt);
    return date.toDateString();
  };

  return (
    <div>
      <Dialog open={view.isOpen} onOpenChange={view.onClose}>
        <DialogContent>
          <DialogHeader>
            <h2 className="text-xl font-bold px-2">{view.project?.name}</h2>
          </DialogHeader>
          <div className="w-[70vh] pt-4 flex gap-x-20 ">
            <div>
                <p className="font-semibold">Descripción del proyecto:</p>
                <div>{view.project?.description}</div>
            </div>
            <div className="justify-end">
                <p className="font-semibold">Fecha de creación:</p>
                 <div>{view.project?.createdAt ? formatCreatedAt(view.project.createdAt) : ""}</div>
            </div>
          </div>
          <div>
            <p className="font-semibold">Tareas:</p>
            <div className="grid grid-cols-2 p-3 border-b ">
            {task &&
              task.map((tasks, index) => (
                <div key={index} className="">
                  {tasks}
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
