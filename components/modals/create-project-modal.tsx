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

  const onClickSubmit = () => {
    const formData = form.getValues();

    formData.users = values;

    console.log(formData);
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
              values.map((value, index) => <div key={index}>{value}</div>)}
          </div>
        </div>
        <Button onClick={onClickSubmit}>Crear</Button>
      </form>
    </Form>
  );
}
