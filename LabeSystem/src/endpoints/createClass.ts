import { Request, Response } from "express"
import { connection } from "../connection"

export const createClass = async (req: Request, res: Response): Promise<void> => {
    try {

        const { nome, dados_iniciais, modulo } = req.body

        if (!nome || !dados_iniciais) {
            res.status(406)
            throw new Error("Preencha todos os campos da requisição!")
        }

        if (modulo > 7 || modulo < 0) {
            res.status(406)
            throw new Error("Módulo inválido! Insira um módulo entre 0 e 7.")
        }

        const [day, month, year]: string = dados_iniciais.split("/")

        const startDateClean: Date = new Date(`${year}-${month}-${day}`);
        const endDataInicial: Date = new Date(`${year}-${month}-${day}`);
        const endDateEpoch = endDataInicial.setMonth(endDataInicial.getMonth() + 6);
        const endDate = new Date(endDateEpoch)


        await connection('labeSystem_turma')
            .insert({
                nome: nome,
                data_inicio: startDateClean,
                data_final: endDate,
                modulo: modulo === 0 ? 0 : modulo
            })

        res.status(201).send("Turma criada!")

    } catch (err) {
        res.send(err.sqlMessage || err.message)
    }
}