import { Response, Request } from "express";
import { removeStudentMissionData } from "../data/removeStudentMissionData";

export const removeStudentMission = async (req: Request, res: Response): Promise<void> => {

    try {

        const user = await removeStudentMissionData(Number(req.params.id))

        res.status(200).send({ message: "Aluno removido da turma com sucesso!" })

    } catch (error) {
        res.status(400).send(error.message)
    }

}