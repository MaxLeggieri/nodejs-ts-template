import express from "express"
import compression from "compression"
import cors from "cors"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(compression())

app.get('/', (req, res) => {
  res.json({
    response: true,
    message: "Your API is up and working"
  })
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})


