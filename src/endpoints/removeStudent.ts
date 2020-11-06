import { Request, Response } from "express";
import { removeStudentData } from "../data/removeStudentData";

export const removeStudent = async (req: Request, res: Response):Promise<void> => {
   try {

      const result = await removeStudentData(Number(req.params.id))

      if (!result) {
         res.statusCode = 404
         throw new Error("Sem resultados!")
     }

     res.status(200).send({chaveDoRetorno: "Aluno excluido com sucesso!"});
     console.log(result)
   } catch (error) {
      res.send(400).send(error.message)
   }
}