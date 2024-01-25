import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProjectOptions } from "./project-options";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import { Project } from "@/types";

export const ProjectsTable = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 10;

  const getTableData = async () => {
    try {
      const response = await axios.get("/api/project", {
        params: {
          page: currentPage,
          perPage: itemsPerPage,
        },
      });
      setProjects(response.data.project);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTableData();
  }, []);
  console.log(projects);

  const formatCreatedAt = (createdAt: string): string => {
    const date = new Date(createdAt);
    return date.toDateString();
  };

  return (
    <div className="w-[calc(150vh)] flex flex-col items-center justify-center">
      {projects.length === 0 && (
        <div className="text-3xl text-muted-foreground mt-[15vh]">
          No hay proyectos
        </div>
      )}

      {projects.length >= 1 && (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Nombre</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead>Dueño</TableHead>
                <TableHead>Miembros</TableHead>
                <TableHead className="text-right">Creación</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project: Project) => {
                return (
                  <TableRow key={project.id} className="hover:bg-primary/30">
                    <TableCell className="font-medium">
                      {project.name}
                    </TableCell>
                    <TableCell>{project.description}</TableCell>
                    <TableCell>{project.owner}</TableCell>
                    <TableCell>{project.members.length}</TableCell>
                    <TableCell className="text-right">
                      {formatCreatedAt(project.createdAt)}
                    </TableCell>
                    <TableCell className="hover:cursor-pointer hover:text-muted-foreground max-w-[10px]">
                      <ProjectOptions project={project} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <div className="mt-[10vh]">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className="hover:cursor-pointer"
                    onClick={() =>{
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                      getTableData
                    }}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    className="hover:cursor-pointer"
                    onClick={() => {
                      setCurrentPage(1)
                      getTableData();
                    }}
                  >
                    1
                  </PaginationLink>
                  <PaginationLink
                    className="hover:cursor-pointer"
                    onClick={() => {
                      setCurrentPage(2)
                      getTableData();
                    }}
                  >
                    2
                  </PaginationLink>
                  <PaginationLink
                    className="hover:cursor-pointer"
                    onClick={() => {
                      setCurrentPage(3)
                      getTableData();
                    }}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    className="hover:cursor-pointer"
                    onClick={() =>{ 
                      setCurrentPage((prev) => prev + 1)
                      getTableData()
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </>
      )}
    </div>
  );
};
