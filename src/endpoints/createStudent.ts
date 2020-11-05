import { Request, Response } from 'express';
import { createStudentData } from "../data/createStudentData"

export const createStudent = async (req: Request, res: Response) => {
    try {
        const { id, name, email, birthdate, mission_id } = req.body;
        const user = await createStudentData(id, name, email, birthdate, mission_id);

        if (!(id && name && birthdate && email && mission_id)) {
            res.statusCode = 400
            throw new Error("É necessario preencher todos os campos!")
        }

        res.status(200).send({ chaveDoRetorno: "Aluno criado!!" });
    } catch (error) {

        res.status(400).send(error.message);
    }
};