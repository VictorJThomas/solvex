import { useCreate } from "@/hooks/use-create";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import React, { useState } from "react";
import axios from "axios";
import { useSession } from "@clerk/nextjs";
import { X } from "lucide-react";

export const CreateProjectModal = () => {
  const create = useCreate();

  return (
    <div className="h-90">
      <Dialog open={create.isOpen} onOpenChange={create.onClose}>
        <DialogContent>
          <DialogHeader className="border-b pb-3">
            <h2 className="text-lg font-medium">Nuevo Proyecto</h2>
          </DialogHeader>
          <ProjectForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string(),
  users: yup.array(),
});

function ProjectForm() {
  const { session } = useSession();
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const [inputValue, setInputValue] = useState<string>("");
  const [values, setValues] = useState<string[]>([]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setValues((prevValues) => [...prevValues, inputValue.trim()]);
      setInputValue("");
    }
  };

  const onClickRemove = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    event.preventDefault()
    setValues((prevValues) => prevValues.filter((_, i) => i !== index));
  };

  const onClickSubmit = async (e: {preventDefault: () => void}) => {
    const formData = form.getValues();

    formData.users = values;

    try{
      const response = await axios.post("/api/project", {
        owner: session?.user.fullName,
        name: formData.name,
        description: formData.description,
        users: formData.users
      })
      return response.data
    } catch (error){
      console.error(error)
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
                <Input {...field} />
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
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <div>
          <div className="p-4 border-b">
            {values &&
              values.map((value, index) => 
              <div key={index} className="flex gap-x-1">
                {value} 
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={(event) => onClickRemove(event, index)}
                >
                  <X className="h-4 w-4 pb-1"/>
                </Button>
              </div>
            )}
          </div>
        </div>
        <Button onClick={onClickSubmit}>Crear</Button>
      </form>
    </Form>
  );
}
