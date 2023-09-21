import prisma from "./database";

(async () => {
  const studentsByClass = await prisma.student.groupBy({
    by:["class"],
    _count:{
      id:true,
    },
    orderBy:{
      _count:{
        id:"desc",
      },
    },
  }) // TODO: Faça a implementação aqui
  console.log("Agrupamento de alunos por turma");
  console.log(studentsByClass);
  
  const studentWithouJobByClass = await prisma.student.groupBy({
    by:["class"],
    where:{
      jobId:null,
    },
    _count:{
      id:true,
    },
    orderBy:{
      _count:{
        id:"desc",
      },
    },
  })
  console.log("Agrupamento de alunos por turma sem emprego:");
  console.log(studentWithouJobByClass);
  
  
})