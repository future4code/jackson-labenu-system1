import { Request, Response } from 'express';
import { searchAgeByIdData } from "../data/searchAgeByIdData"

export const searchAgeById = async (req: Request, res: Response) => {
    console.log(req.params.id)
    try {
        const result = await searchAgeByIdData(req.params.id);

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