import { Request, Response } from "express"
import { connection } from "../connection"

export const addStudentIntoClass = async (req: Request, res: Response): Promise<void> => {
    try {
        const { turma_Id } = req.body
        const id = req.params.id

        if (!turma_Id) {
            res.status(406)
            throw new Error("Preencha o campo da requisição!")
        }

        const resultFilter = await connection("turma")
        .select()
        .where({
            id : turma_Id
        })


          if (!resultFilter[0]) {
            res.status(404)
            throw new Error("Turma não encontrada!")
        }

        const result = await connection("Estudante")
            .update({
                turma_id: turma_Id
            })
            .where({
                id: id
            })

            if(!result) {
                res.status(404)
                throw new Error("Estudante(a) não encontrado(a)!")
            }

            res.send("Turma do estudante(a) atualizada!")

    } catch (err) {
        res.send(err.sqlMessage || err.message)
    }
}