
import express from 'express'
import { Request, Response, NextFunction } from 'express'

import router from "./router/router"



const app = express();
const port:number = 3000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send("Welcome typescript!!")
})


app.use("/router", router)


app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})

//change




