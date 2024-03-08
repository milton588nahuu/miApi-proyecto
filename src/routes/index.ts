import { Router } from "express";
import {readdirSync} from "fs"

const router = Router();
const PATH_ROUTER = `${__dirname}`

const clearFileName= (fileName:string) => {   
    const file = fileName.split('.').shift()
    return file
}


readdirSync(PATH_ROUTER).filter((filename) => {
    console.log(clearFileName(filename))
    const clearName = clearFileName(filename)
    if (clearName !== "index" ) {
        import(`./${clearName}`).then((moduleRouter) => {
            console.log(`se esta cargando la ruta ..... ${clearName}`)
            router.use(`/${clearName}`,moduleRouter.router)
        })
    }
})

export { router } ;