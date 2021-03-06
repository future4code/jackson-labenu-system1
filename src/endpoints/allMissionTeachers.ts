import { Request, Response } from 'express';
import { allMissionTeachersData } from "../data/allMissionTeachersData"

export const allMissionTeachers = async (req: Request, res: Response) => {
    console.log(req.params.id)
    try {
        const result = await allMissionTeachersData(req.params.id);

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