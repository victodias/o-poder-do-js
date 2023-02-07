import express from 'express'
import mongoose from 'mongoose'

const app = express()
const SERVER_PORT = 3001

mongoose.set('strictQuery', true)

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => console.log('conectado ao mongo'))
  .catch(() => console.log('Erro ao conectar'))

app.listen(SERVER_PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${SERVER_PORT}`)
})
