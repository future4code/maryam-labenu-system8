import {Request, Response} from "express"

import { connection } from "../connection"

export const createTeacher = async (req:Request, res: Response): Promise<void> =>{
    try{
        //validação de dados
        if(!req.body.nome || !req.body.email || !req.body.data_nasc){
            res.status(400).send("Preencha todos os campos")
        }
        
        //consultar banco de dados
        const id: string = Date.now().toString()
        await conection("labeSystem_docente").insert(id, req.body.email, req.body.data_nasc)





        //responder a requisição
        res.status(200)
        .send("Conseguiu cadastrar")
    }catch(error){
        res.status(500).send(error.message)
    }
    
}