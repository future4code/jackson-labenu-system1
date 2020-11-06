import {Response, Request} from "express";
import {removeStudentMissionData} from "../data/removeStudentMissionData";
import { selectStudentById } from "../data/selectStudentByIdData";


export const removeStudentMission = async(req:Request, res:Response):Promise<void> => {


    try {

        const user = await selectStudentById(Number(req.params.id))

        if(!user.length) {
            res.statusCode = 400;
            throw new Error("Usuário não encontrado.")
        }

        await removeStudentMissionData(Number(req.params.id))

        res.status(200).send({message: "Aluno removido da turma com sucesso!"})
    } catch (error) {
        res.status(400).send(error.message)
    }

}