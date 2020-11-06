import { Request, Response } from "express";
import { removeStudentData } from "../data/removeStudentData";

export const removeStudent = async (req: Request, res: Response): Promise<void> => {
   try {

      const result = await removeStudentData(Number(req.params.id))

      res.status(200).send({ chaveDoRetorno: "Aluno excluido com sucesso!" });
      
   } catch (error) {
      res.status(400).send(error.message)
   }
}