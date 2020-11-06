import {Response, Request} from "express";
import {removeTeacherMissionData} from "../data/removeTeacherMissionData";
import { selectTeacherById } from "../data/selectTeacherByIdData";


export const removeTeacherMission = async(req:Request, res:Response):Promise<void> => {


    try {

        const user = await selectTeacherById(Number(req.params.id))

        if(!user.length) {
            res.statusCode = 400;
            throw new Error("Usuário não encontrado.")
        }

        await removeTeacherMissionData(Number(req.params.id))

        res.status(200).send({message: "Professor removido da turma com sucesso!"})
    } catch (error) {
        res.status(400).send(error.message)
    }

}