import { Response, Request } from "express";
import { removeTeacherMissionData } from "../data/removeTeacherMissionData";

export const removeTeacherMission = async (req: Request, res: Response): Promise<void> => {

    try {
        const user = await removeTeacherMissionData(Number(req.params.id))

        res.status(200).send({ message: "Professor removido da turma com sucesso!" })

    } catch (error) {
        res.status(400).send(error.message)
    }

}