import {PrismaClient} from "@prisma/client";

const prismaClienSingleton = () => {
    return new PrismaClient();
};

type PrismaClientSingleton = ReturnType <typeof prismaClienSingleton>

const globalForPrisma  = globalThis as unknown as {
    prisma : PrismaClientSingleton | undefined
};


const  prisma = globalForPrisma ?? prismaClienSingleton();

export default prisma;