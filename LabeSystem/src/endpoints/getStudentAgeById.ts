import { Request, Response } from "express"
import { connection } from "../connection"

export const getStudentAgeById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id


       const result = await connection('estudante')
            .select()
            .where({
                id : id
            })

            if(!result[0]) {
                res.status(404)
                throw new Error("Estudante(a) não encontrado(a)!")
            }

            const birthDate = result[0].data_nasc.getTime()
            const today = Date.now()
            const age: Object = {
               age: Math.floor((today - birthDate) / 1000 / 60 / 60 / 24 / 365)
            }

            res.send(age)

    } catch (err) {
        res.send(err.sqlMessage || err.message)
    }
}