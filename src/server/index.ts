import '@babel/polyfill';
import express from 'express'
import mongoose: any from 'mongoose';
import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http';
import cors from 'cors'



const app = express()

app.use(cors())

const httpServer = createServer(app)

const port = process.env.PORT || 1010

httpServer.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`)
})