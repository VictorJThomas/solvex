import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page");
    const perPage = searchParams.get("perPage");

    if (!page || !perPage) {
      return NextResponse.json(
        {
          message: "Missing required query parameters",
        },
        {
          status: 400,
        }
      );
    }

    const offset = (Number(page) - 1) * Number(perPage);

    const project = await prisma.projects.findMany({
      orderBy: {
        createdAt: "desc",
      },
      skip: offset,
      take: Number(perPage),
    });

    return NextResponse.json({ project }, { status: 200 });
  } catch (error) {
    console.error("Error GET Project request:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: "Internal server error.",
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function POST(request: Request) {
  try {
    const { owner, name, description, users, tasks } = await request.json();

    const project = await prisma.projects.create({
      data: {
        owner: owner,
        name: name,
        description: description,
        tasks: tasks,
        members: users,
      },
    });

    return NextResponse.json({ project }, { status: 201 });
  } catch (error) {
    console.error("Error POST Project request:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: "Internal server error.",
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function PUT(request: Request) {
  try {
    const { name, description, users, id, tasks } = await request.json();

    const updatedProject = await prisma.projects.update({
      where: {
        id: id,
      },
      data: {
        name,
        description,
        members: {
          set: users,
        },
        tasks: {
          set: tasks,
        },
      },
    });
    console.log(updatedProject);
    return NextResponse.json({ updatedProject }, { status: 200 });
  } catch (error) {
    console.error("Error PUT Project request:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: "Internal server error.",
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  if (!id) {
    return NextResponse.json(
      {
        message: "Missing project ID.",
      },
      {
        status: 400,
      }
    );
  }

  try {
    const deletedProject = await prisma.projects.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json({ deletedProject }, { status: 200 });
  } catch (error) {
    console.error("Error DELETE Project request:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: "Internal server error.",
        },
        {
          status: 500,
        }
      );
    }
  }
}
