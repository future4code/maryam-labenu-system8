import { Request, Response } from "express"
import connection from "../conection"

export default async function getTeacher(req: Request, res: Response){
    try{

        const id = req.params.id

        //consultar banco de dados
        const teacher = await connection('labeSystem_docente')
        .select()
        .where({
            id : id
        })

        if(!teacher[0]) {
            res.status(404)
            throw new Error("Professor(a) não encontrado(a)!")
        }

        //responder a requisição
        res.status(200)
        .send(teacher)
    }catch(error){
        res.status(500).send(error.message)
    }
}