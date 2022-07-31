class LoadAgenda {
    constructor() {
        this.key = 'LoadAgenda'
        this.options = {
            delay: 5000
        }
    }

    async handle({ data }) {
        const { user } = data
        console.log('sua agenda está sendo carregada', user.name)
    }
}

export default new LoadAgenda()