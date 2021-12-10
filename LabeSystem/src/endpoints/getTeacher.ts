import { Request, Response } from "express"
import connection from "../conection"

export default async function getTeacher(req: Request, res: Response){
    try{
        //consultar banco de dados
        const teacher = await connection('labeSystem_docente').select('*')
        //responder a requisição
        res.status(200)
        .send(teacher)
    }catch(error){
        res.status(500).send(error.message)
    }
}