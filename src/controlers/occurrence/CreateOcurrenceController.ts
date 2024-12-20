import { Response, Request } from "express";
import { CreateOcurrenceService } from "../../services/occurrence/CreateOcurrenceService";
import {SendEmail} from '../../SMTP/SendEmail'

class CreateOcurrenceController {
  async handle(req: Request, res: Response) {
    const { reanalise,classificacao_id, unidade_id, descricao, cartao_beneficiario, manifestacao_ant, identificacao_id,forma_resposta_id,assunto_id, sub_assunto_id,nome, email, CPF, telefone,canal_id} = req.body;

    

    const createOcurrenceService = new CreateOcurrenceService();

    const occurrence = await createOcurrenceService.execute({ reanalise,classificacao_id, unidade_id, descricao, cartao_beneficiario, manifestacao_ant, identificacao_id,forma_resposta_id,assunto_id, sub_assunto_id,nome, email, CPF, telefone,canal_id });

    if (occurrence.logError == 1) {
      res.status(occurrence.status)
      return res.json(occurrence.error)
    }    

    const sendEmail = new SendEmail();

    var dataEmail = [['ti.aziel@unimedpinda.com.br','ti.marcelo@unimedpinda.com.br','suporte10@unimedpinda.com.br'],
                    {subject: 'Abertura de nova Ocorrencia de Ouvidoria',
                     text : 'Informamos que foi aberto o processo para verificação da ouvidoria.'
                    }]
    
    if (forma_resposta_id == 1) {   
      dataEmail[0].push(email)
      console.log(dataEmail[1].text); 
    }

    const emailSent = await sendEmail.execute(dataEmail)
    return res.json(occurrence)
    
  }
}

export { CreateOcurrenceController };
