import Mail from '../../lib/Mail'

class RegistrationMail {
    constructor() {
        this.key = 'RegistrationMail'
    }

    async handle({ data }) {
        const { user } = data
        await Mail.sendMail({
            from: 'Queue test <queue@teste.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${user.name}, bem-vindo ao sistema de filas da Rocketseat :D`
        })
    }
}

export default new RegistrationMail()