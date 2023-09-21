import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

async function seed() {
  try{
    const existingCustomer = await prisma.customer.findFirst({
      where:{
        documento:'133.245.497-60',
      },
    })
    if(!existingCustomer){
      await prisma.customer.create({
        data:{
          nome: 'Geraldo Luiz Datena',
          documento:'133.245.497-60',
        }
      })
      console.log("Cliente cadastrado com sucesso!");    
    }else{
      console.log("Cliente já cadastrado.");
      
    }
  }catch(error){
    console.error("Erro ao cadastrar o cliente", error);

  }finally{
    await prisma.$disconnect()
  }
}

seed()