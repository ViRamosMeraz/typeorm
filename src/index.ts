import "reflect-metadata"
import app from './app'
import {AppDataSource} from './db'

const PORT = 3000

async function main() {
   try {
    await AppDataSource.initialize()
    console.log("database connected")
    app.listen(3000)
    console.log(`server ejecutandose en puerto ${PORT}`)  
   } catch (error) {
    console.log(error)
   }  
}

main()

