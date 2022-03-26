
import express from 'express'
import { Request, Response, NextFunction } from 'express'

import first from "./router/router"


const app = express();
const port:number = 3000 || process.env.PORT;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send("Welcome typescript!!")
})


app.use('/first', first)







app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})





