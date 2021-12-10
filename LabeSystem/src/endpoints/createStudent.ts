import {Request, Response} from "express"
import { connection } from "../connection"

export const createStudent = async (req:Request, res: Response): Promise<void> => {
try{
    const {nome, email,data_nasc, turma_id, hobbies} =req.body

    if (!nome  || !email || !data_nasc ||  !turma_id || !hobbies){
        res.status(406)
        throw new Error ("Preencha todos os campos corretamente!")
    }

    const resultFilter = await connection ("labeSystem_turma")
    .select()
    .where({
        id:turma_id
    })

    if (!resultFilter[0]) {
        res.status(404)
        throw new Error("Esta turma não existe!")
    }
    const [day, month, year]:string = data_nasc.split("/")

    const data_nasc_apagar:Date = new Date(`${year}-${month}-${day}`);

    await connection ('labeSystem_estudante').insert({
        nome:nome,
        email,
        data_nasc:data_nasc_apagar,
        turma_id:turma_id,
        hobbies
    })

    res.status(200).send({message:"Aluno(a)criado!"})

} catch (error: any) {
    res.status(400).send({message:error.message})
}
    
}