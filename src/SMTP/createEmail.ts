


class email{
    from: string;
    to: string;
    subject: string;
    text: string;
    toEmail: string;
    
    constructor(dataEmail,toEmail){
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.from =  'suporte10@unimedpinda.com.br',
        this.to = toEmail,
        this.subject = dataEmail[1].subject,
        this.text = dataEmail[1].text
    }

}

export {email }