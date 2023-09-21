import express, { Request, Response } from "express";
import prisma from "./database";
import { Prisma } from "@prisma/client";

const app = express();

type PetResult = {
  owner: string;
  pet: string;
  animal: string;
}

app.get("/pets/owner/:ownerName", async (req: Request, res: Response) => {
  const { ownerName } = req.params;
  try {
    const result = await prisma.$queryRaw<PetResult[]>(
    `SELECT "Owner."name" as "owner, "Pet"."name" as "Pet",  "Pet"."animal" as "animal"
    FROM "Owner"
    JOIN "Pet" ON "Owner"."id" = "Pet"."ownerId"
    WHERE "Owner"."name" = $1,
    ownerName
    `  
    
    ); // TODO: Implemente a query
    res.send(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running or port ${port}`);
})