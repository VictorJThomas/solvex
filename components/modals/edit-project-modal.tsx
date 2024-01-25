import { useEdit } from "@/hooks/use-edit";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
import { useView } from "@/hooks/use-view";

export const EditProjectModal = () => {
  const edit = useEdit();

  return (
    <Dialog open={edit.isOpen} onOpenChange={edit.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-xl font-bold">Editar proyecto:</h2>
          <div className="text-lg font-medium">{edit.project?.name}</div>
        </DialogHeader>
        <EditProjectForm />
      </DialogContent>
    </Dialog>
  );
};

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string(),
  users: yup.array(),
  tasks: yup.array()
});

function EditProjectForm() {
  const edit = useEdit();
  const view = useView();
  const [members, setMembers] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  
  const [tasks, setTasks] = useState<string[]>([])
  const [inputTaskValue, setInputTaskValue] = useState<string>("");

  const users = edit.project?.members;
  const task = view.project?.tasks
  const form = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (users) setMembers(users);
    if(task) setTasks(task)
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setMembers((prevValues) => [...prevValues, inputValue.trim()]);
      setInputValue("");
    }
  };

  const onClickRemove = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    event.preventDefault();
    setMembers((prevValues) => prevValues.filter((_, i) => i !== index));
  };

  const handleKeyPressTasks = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setTasks((prevValues) => [...prevValues, inputTaskValue.trim()]);
      setInputTaskValue("");
    }
  };

  const onClickTaskRemove = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    event.preventDefault();
    setTasks((prevValues) => prevValues.filter((_, i) => i !== index));
  };
 

  const onClickSubmit = async (e: { preventDefault: () => void }) => {
    const formData = form.getValues();

    formData.users = members;
    formData.tasks = tasks

    try {
      const response = await axios.put("/api/project", {
        id: edit.project?.id,
        name: formData.name,
        description: formData.description,
        users: formData.users,
        tasks: formData.tasks
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form>
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del proyecto</FormLabel>
              <FormControl>
                <Input {...field} defaultValue={edit.project?.name} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción del proyecto</FormLabel>
              <FormControl>
                <Input {...field} defaultValue={edit.project?.description} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="tasks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tareas</FormLabel>
              <FormControl>
                <Input
                  value={inputTaskValue}
                  onKeyDown={handleKeyPressTasks}
                  onChange={(e) => setInputTaskValue(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="">
          <div className="grid grid-cols-2 p-3 border-b">
            {tasks &&
              tasks.map((tasks, index) => (
                <div key={index} className="flex gap-x-1">
                  {tasks}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(event) => onClickTaskRemove(event, index)}
                  >
                    <X className="h-4 w-4 pb-1" />
                  </Button>
                </div>
              ))}
          </div>
        </div>
        <FormField
          name="users"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Miembros</FormLabel>
              <FormControl>
                <Input
                  value={inputValue}
                  onKeyDown={handleKeyPress}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="">
          <div className="grid grid-cols-3 p-4 border-b overflow-y">
            {members &&
              members.map((user, index) => (
                <div key={index} className="flex gap-x-1">
                  {user}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(event) => onClickRemove(event, index)}
                  >
                    <X className="h-4 w-4 pb-1" />
                  </Button>
                </div>
              ))}
          </div>
        </div>
        <Button onClick={onClickSubmit}>
          Editar
        </Button>
      </form>
    </Form>
  );
}
