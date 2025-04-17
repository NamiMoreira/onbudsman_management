import prismaClient from "../../prisma";

class GetByProtocolService{

    async execute(protocol: string){
        const ocurrence = prismaClient.occurrence.findMany({
            where: {
               protocolo: protocol
            }
        })
        return ocurrence;

    }
}

export {GetByProtocolService}