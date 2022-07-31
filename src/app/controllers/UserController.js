import Queue, { contratoQueue } from '../lib/Queue'

class UserController {
    async handle(req, res) {
        const { name, email, password } = req.body
        const user = {
            name,
            email,
            password
        }

        // fila de jobs de registration mail
        await Queue.add('RegistrationMail', { user })
        await Queue.add('LoadAgenda', { user })
        // await contratoQueue.add({ user })

        return res.json(user)
    }
}

export default new UserController()