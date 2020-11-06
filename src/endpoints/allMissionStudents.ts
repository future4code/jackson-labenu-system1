import { Request, Response } from 'express';
import { allMissionStudentsData } from "../data/allMissionStudentsData"

export const allMissionStudents = async (req: Request, res: Response) => {
    console.log(req.params.id)
    try {
        const result = await allMissionStudentsData(req.params.id);

        if (!result) {
            res.statusCode = 404
            throw new Error("Sem resultados!")
        }

        res.status(200).send(result);
        console.log(result)
    } catch (error) {
        res.status(400).send(error.message);
    }
};