import Mail from '../../lib/Mail'

class BoasVindasMail {
    constructor() {
        this.key = 'BoasVindasMail'
    }

    async handle({ data }) {
        const { user } = data
        await Mail.sendMail({
            from: 'Queue test <queue@teste.com>',
            to: `${user.name} <${user.email}>`,
            subject: `Bem-vindo a tree ${user.name}`,
            html: `Olá, ${user.name}, bem-vindo ao sistema de filas da tree :D`
        })
    }
}

export default new BoasVindasMail()