import 'dotenv/config'
import express from 'express'
import userController from './app/controllers/UserController'
import Queue from './app/lib/Queue'


import { createBullBoard } from '@bull-board/api'
import { BullAdapter } from '@bull-board/api/bullAdapter'
import { ExpressAdapter } from '@bull-board/express'

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard({
    queues: Queue.queues.map(queue => new BullAdapter(queue.bull)),
    serverAdapter: serverAdapter,
});

const app = express()

app.use('/admin/queues', serverAdapter.getRouter());

app.use(express.json())

app.post('/user', userController.handle)

app.listen(3333, () => {
    console.log('Server is running on localhost:3333')
})