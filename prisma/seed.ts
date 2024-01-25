import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const project = [
  {
    name: "Project 1",
    description: "Description for Project 1",
    owner: "Victor J Thomas",
    members: ['John', 'Alice'],
    tasks: ['Task A', 'Task B'],
  },
  {
    name: "Project 2",
    description: "Description for Project 2",
    owner: "Victor J Thomas",
    members: ['Bob', 'Eva'],
    tasks: ['Task X', 'Task Y'],
  },
  {
    name: "Project 3",
    description: "Description for Project 3",
    owner: "Victor J Thomas",
    members: ['Charlie', 'Diana'],
    tasks: ['Task Alpha', 'Task Beta'],
  },
  {
    name: "Project 4",
    description: "Description for Project 4",
    owner: "Victor J Thomas",
    members: ['Emma', 'Frank'],
    tasks: ['Task 1', 'Task 2'],
  },
  {
    name: "Project 5",
    description: "Description for Project 5",
    owner: "Victor J Thomas",
    members: ['Grace', 'Henry'],
    tasks: ['Task A', 'Task B'],
  },
  {
    name: "Project 6",
    description: "Description for Project 6",
    owner: "Victor J Thomas",
    members: ['Ivy', 'Jack'],
    tasks: ['Task X', 'Task Y'],
  },
  {
    name: "Project 7",
    description: "Description for Project 7",
    owner: "Victor J Thomas",
    members: ['Kate', 'Leo'],
    tasks: ['Task Alpha', 'Task Beta'],
  },
  {
    name: "Project 8",
    description: "Description for Project 8",
    owner: "Victor J Thomas",
    members: ['Mike', 'Nina'],
    tasks: ['Task 1', 'Task 2'],
  },
  {
    name: "Project 9",
    description: "Description for Project 9",
    owner: "Victor J Thomas",
    members: ['Oliver', 'Pamela'],
    tasks: ['Task A', 'Task B'],
  },
  {
    name: "Project 10",
    description: "Description for Project 10",
    owner: "Victor J Thomas",
    members: ['Quincy', 'Rita'],
    tasks: ['Task X', 'Task Y'],
  },
  {
    name: "Project 11",
    description: "Description for Project 11",
    owner: "Victor J Thomas",
    members: ['Sam', 'Tina'],
    tasks: ['Task Alpha', 'Task Beta'],
  },
  {
    name: "Project 12",
    description: "Description for Project 12",
    owner: "Victor J Thomas",
    members: ['Ulysses', 'Vera'],
    tasks: ['Task 1', 'Task 2'],
  },
  {
    name: "Project 13",
    description: "Description for Project 13",
    owner: "Victor J Thomas",
    members: ['Walter', 'Xena'],
    tasks: ['Task A', 'Task B'],
  },
  {
    name: "Project 14",
    description: "Description for Project 14",
    owner: "Victor J Thomas",
    members: ['Yvonne', 'Zack'],
    tasks: ['Task X', 'Task Y'],
  },
  {
    name: "Project 15",
    description: "Description for Project 15",
    owner: "Victor J Thomas",
    members: ['Amy', 'Brian'],
    tasks: ['Task Alpha', 'Task Beta'],
  },
  {
    name: "Project 16",
    description: "Description for Project 16",
    owner: "Victor J Thomas",
    members: ['Chris', 'Daisy'],
    tasks: ['Task 1', 'Task 2'],
  },
  {
    name: "Project 17",
    description: "Description for Project 17",
    owner: "Victor J Thomas",
    members: ['Edward', 'Fiona'],
    tasks: ['Task A', 'Task B'],
  },
  {
    name: "Project 18",
    description: "Description for Project 18",
    owner: "Victor J Thomas",
    members: ['George', 'Holly'],
    tasks: ['Task X', 'Task Y'],
  },
  {
    name: "Project 19",
    description: "Description for Project 19",
    owner: "Victor J Thomas",
    members: ['Ian', 'Jessica'],
    tasks: ['Task Alpha', 'Task Beta'],
  },
  {
    name: "Project 20",
    description: "Description for Project 20",
    owner: "Victor J Thomas",
    members: ['Kevin', 'Linda'],
    tasks: ['Task 1', 'Task 2'],
  },
  {
    name: "Project 21",
    description: "Description for Project 21",
    owner: "Victor J Thomas",
    members: ['Molly', 'Nathan'],
    tasks: ['Task A', 'Task B'],
  },
  {
    name: "Project 22",
    description: "Description for Project 22",
    owner: "Victor J Thomas",
    members: ['Oscar', 'Penelope'],
    tasks: ['Task X', 'Task Y'],
  },
  {
    name: "Project 23",
    description: "Description for Project 23",
    owner: "Victor J Thomas",
    members: ['Quinn', 'Riley'],
    tasks: ['Task Alpha', 'Task Beta'],
  },
  {
    name: "Project 24",
    description: "Description for Project 24",
    owner: "Victor J Thomas",
    members: ['Samantha', 'Tom'],
    tasks: ['Task 1', 'Task 2'],
  },
  {
    name: "Project 25",
    description: "Description for Project 25",
    owner: "Victor J Thomas",
    members: ['Ursula', 'Vince'],
    tasks: ['Task A', 'Task B'],
  },
];



  async function main() {
    console.log(`Start seeding...`);
    for (const projects of project) {
      await prisma.projects.create({ data: projects });
    }
    console.log(`Seeding finished.`);
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });