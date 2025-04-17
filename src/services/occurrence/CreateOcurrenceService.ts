import prismaClient from "../../prisma";

interface Occurrence {
  reanalise: boolean;
  classificacao_id: number;
  unidade_id: number;
  descricao: string;
  cartao_beneficiario: string;
  manifestacao_ant: string;
  identificacao_id: number;
  forma_resposta_id: number;
  assunto_id: number;
  sub_assunto_id: number;
  nome: string;
  email: string;
  CPF: string;
  telefone: string;
  canal_id: number;
}

class CreateOcurrenceService {
  async execute({
    reanalise,
    classificacao_id,
    unidade_id,
    descricao,
    cartao_beneficiario,
    manifestacao_ant,
    identificacao_id,
    forma_resposta_id,
    assunto_id,
    sub_assunto_id,
    nome,
    email,
    CPF,
    telefone,
    canal_id,
  }: Occurrence) {
    const data = new Date();
    const dataFormated =`${data.getDate()}` +`${data.getMonth()}` +`${data.getFullYear()}` +"00" +`${data.getMilliseconds()}`;
    const protocolo = `${identificacao_id}` + `${classificacao_id}` + `${dataFormated}`;

    if (
      !reanalise ||
      !classificacao_id ||
      !unidade_id ||
      !descricao ||
      !cartao_beneficiario ||
      !identificacao_id ||
      !forma_resposta_id ||
      !assunto_id ||
      !sub_assunto_id ||
      !nome ||
      !email
    ) {
      return { logError: 1, status: 400, error: "Parametros incorretos" };
    }

    const occurrence = await prismaClient.occurrence.create({
      data: {
        reanalise: reanalise,
        classificacao_id: classificacao_id,
        unidade_id: unidade_id,
        descricao: descricao,
        cartao_beneficiario: cartao_beneficiario,
        manifestacao_ant: manifestacao_ant,
        identificacao_id: identificacao_id,
        forma_resposta_id: forma_resposta_id,
        assunto_id: assunto_id,
        sub_assunto_id: sub_assunto_id,
        nome: nome,
        email: email,
        cpf: CPF,
        telefone: telefone,
        canal_id: canal_id,
        prazo_final: new Date("10/01/2024"),
        prazo_interno: new Date("10/01/2024"),
        protocolo: protocolo,
      },
      select: {
        id: true,
        protocolo: true,
        nome: true,
        prazo_final: true,
        forma_resposta_id: true,
      },
    });

    return occurrence;
  }
}

export { CreateOcurrenceService };
