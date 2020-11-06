import { Response, Request } from "express";
import { changeStudentMissionData } from "../data/changeStudentMissionData";

export const changeStudentMission = async (req: Request, res: Response): Promise<void> => {

    try { 
        const user = await changeStudentMissionData(Number(req.params.id), Number(req.body.mission_id))
        
        res.status(200).send({ message: "Aluno foi mudado de turma com sucesso!" })

    } catch (error) {
        res.status(400).send(error.message)
    }

}